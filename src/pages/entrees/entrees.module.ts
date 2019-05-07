import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntreesPage } from './entrees';

@NgModule({
  declarations: [
    EntreesPage,
  ],
  imports: [
    IonicPageModule.forChild(EntreesPage),
  ],
})
export class EntreesPageModule {}
