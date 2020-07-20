import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent
  ],
})
export class MainModule { }
