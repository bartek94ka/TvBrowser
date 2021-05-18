import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialListComponent } from './serial-list/serial-list.component';
import { SerialDetailsComponent } from './serial-details/serial-details.component';
import { SerialCardComponent } from './serial-card/serial-card.component';

@NgModule({
  declarations: [
    SerialListComponent,
    SerialDetailsComponent,
    SerialCardComponent
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
