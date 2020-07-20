import { AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/utils';

declare const echarts: any;

@Component({
  selector: 'ngx-grades-bar-chart',
  template: `
    <div echarts
         [options]="options"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class GradesPieChartComponent implements AfterViewInit, OnDestroy {
  @Input() selectedExamName: string = '';
  @Input() gradesData: any[] = [];

  options: any = {};
  themeSubscription: any;
  echartsInstance: any;

  constructor(private theme: NbThemeService) {
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  resizeChart() {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.gradesData && !changes.gradesData.isFirstChange() && !changes.selectedExamName.isFirstChange()) {
      this.echartsInstance.setOption({
        legend: {
          data: this.gradesData.map(x => x.subject)
        },
        series: {
          data: this.gradesData.map(x => {
            return {
              name: x.subject,
              value: x.marksAchieved
            }
          }),
        }
      });
    }
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data: this.gradesData.map(x => x.subject),
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: this.selectedExamName,
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.gradesData.map(x => {
              return {
                name: x.subject,
                value: x.marksAchieved
              }
            }),
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
