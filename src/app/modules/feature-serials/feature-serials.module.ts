import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialListComponent } from './components/serial-list/serial-list.component';
import { SerialDetailsComponent } from './components/serial-details/serial-details.component';
import { SerialCardComponent } from './components/serial-card/serial-card.component';
import { SerialStoreModule } from '../serial-store/serial-store.module';
import { CommonComponentsModule } from '../common-components/common-components.module';

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
    CommonModule,
    SerialStoreModule,
    CommonComponentsModule,
  ],
})
export class FeatureSerialsModule { }
