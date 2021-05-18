import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SerialStoreModule } from '../serial-store/serial-store.module';
import { FeatureFiltersModule } from '../feature-filters/feature-filters.module';
import { FeatureSerialsModule } from '../feature-serials/feature-serials.module';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    FeatureFiltersModule,
    FeatureSerialsModule,
    SerialStoreModule,
    StoreModule,
    ReactiveFormsModule,
  ],
  exports: [MainLayoutComponent],
  providers: [],
})
export class FeatureMainLayoutModule { }
