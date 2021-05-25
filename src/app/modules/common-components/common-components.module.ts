import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardContentDirective } from './card/card-content.directive';

@NgModule({
  declarations: [
    CardComponent,
    CardContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardContentDirective
  ],
})
export class CommonComponentsModule { }
