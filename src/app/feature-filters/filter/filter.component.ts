import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IFilter } from 'src/app/serial-store/serial.models';

@UntilDestroy()
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  form: FormGroup;
  @Input() genresOptions: string[] = [];
  @Output() filterChange = new EventEmitter<IFilter>();
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'date': new Date(),
      'categories': [[]],
    });

    this.form.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        const filter = this.form.getRawValue() as IFilter;
        this.filterChange.emit(filter);
      })
  }
}
