import { Component, OnInit, HostBinding } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'noticeboard',
  templateUrl: 'noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss'],
})
export class NoticeboardComponent implements OnInit {
  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };

	pageSize = 10;
	
	@HostBinding('attr.aria-label')
  label = 'Loading';

  constructor(private newsService: NewsService) {}

  ngOnInit() {}

  loadNext(cardData) {
    if (cardData.loading) {
      return;
    }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.newsService.load(cardData.pageToLoadNext, this.pageSize).subscribe((nextNews) => {
      cardData.placeholders = [];
      cardData.news.push(...nextNews);
      cardData.loading = false;
      cardData.pageToLoadNext++;
    });
  }
}
