import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerialStoreModule } from './serial-store/serial-store.module';
import { FeatureSerialsModule } from './feature-serials/feature-serials.module';
import { FeatureFiltersModule } from './feature-filters/feature-filters.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { SerialReducer } from './serial-store/serial.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SerialEffects } from './serial-store/serial.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureSerialsModule,
    FeatureFiltersModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ state: SerialReducer }),
    //StoreModule.forRoot({ state: SerialReducer }),
    EffectsModule.forRoot([SerialEffects])
  ],
  providers: [SerialEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
