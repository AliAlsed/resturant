import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEntreesPage } from './add-entrees';

@NgModule({
  declarations: [
    AddEntreesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEntreesPage),
  ],
})
export class AddEntreesPageModule {}
