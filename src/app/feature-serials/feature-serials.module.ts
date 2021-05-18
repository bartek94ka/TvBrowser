import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialListComponent } from './serial-list/serial-list.component';
import { SerialDetailsComponent } from './serial-details/serial-details.component';

@NgModule({
  declarations: [
    SerialListComponent,
    SerialDetailsComponent
  ],
  exports: [
    SerialListComponent,
    SerialDetailsComponent
  ],
  imports: [
    CommonModule
  ],
})
export class FeatureSerialsModule { }
