import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SerialStoreModule } from '../serial-store/serial-store.module';
import { FeatureFiltersModule } from '../feature-filters/feature-filters.module';
import { FeatureSerialsModule } from '../feature-serials/feature-serials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { RouterModule } from '@angular/router';
import { MainLayoutContentComponent } from './main-layout-content/main-layout-content.component';
import { FeatureNavBarModule } from '../feature-nav-bar/feature-nav-bar.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    MainLayoutContentComponent,
  ],
  imports: [
    CommonModule,
    FeatureFiltersModule,
    FeatureSerialsModule,
    SerialStoreModule,
    ReactiveFormsModule,
    RouterModule,
    FeatureNavBarModule,
    MainLayoutRoutingModule
  ],
  exports: [MainLayoutComponent]
})
export class FeatureMainLayoutModule { }
