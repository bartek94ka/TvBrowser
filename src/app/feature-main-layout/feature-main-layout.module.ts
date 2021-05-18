import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SerialStoreModule } from '../serial-store/serial-store.module';
import { FeatureFiltersModule } from '../feature-filters/feature-filters.module';
import { FeatureSerialsModule } from '../feature-serials/feature-serials.module';
import { HttpClient } from '@angular/common/http';
import { StoreModule, StateObservable } from '@ngrx/store';

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
  ],
  exports: [MainLayoutComponent],
  providers: [],
})
export class FeatureMainLayoutModule { }
