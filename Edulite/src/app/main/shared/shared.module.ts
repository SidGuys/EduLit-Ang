import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

const COMPONENTS = [
  NotFoundComponent
]

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
  ],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
})
export class SharedModule { }
