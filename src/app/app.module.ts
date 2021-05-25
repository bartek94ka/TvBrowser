import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureSerialsModule } from './modules/feature-serials/feature-serials.module';
import { FeatureFiltersModule } from './modules/feature-filters/feature-filters.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { SerialReducer } from './modules/serial-store/reducers/serial.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SerialEffects } from './modules/serial-store/effects/serial.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureSerialsModule,
    FeatureFiltersModule,
    HttpClientModule,
    StoreModule.forRoot({ state: SerialReducer }),
    EffectsModule.forRoot([SerialEffects]),
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [SerialEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
