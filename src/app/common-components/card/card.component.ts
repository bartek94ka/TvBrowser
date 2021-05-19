import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef } from '@angular/core';
import { CardContentDirective } from './card-content.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @ContentChild(CardContentDirective, { read: TemplateRef }) contentTemplate: TemplateRef<any>;
}
