import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastmealsPage } from './fastmeals';

@NgModule({
  declarations: [
    FastmealsPage,
  ],
  imports: [
    IonicPageModule.forChild(FastmealsPage),
  ],
})
export class FastmealsPageModule {}
