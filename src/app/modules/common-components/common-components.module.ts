import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardContentDirective } from './components/card/card-content.directive';

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
