import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent, FooterComponent, AvatarComponent} from './components';
import {PageTypePipe} from './pipes';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, AvatarComponent, PageTypePipe],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent
  ]
})
export class SharedModule {
}
