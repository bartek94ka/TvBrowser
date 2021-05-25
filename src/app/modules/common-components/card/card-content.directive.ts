
import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[cardContent]"
})
export class CardContentDirective {
    constructor(readonly template: TemplateRef<any>) {}
}