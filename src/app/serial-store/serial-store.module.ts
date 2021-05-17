import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SerialEffects } from './serial.effects';
import { SerialReducer } from './serial.reducer';
import { SerialFacade } from './serial.facade';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forRoot({ state: SerialReducer }),
        EffectsModule.forRoot([SerialEffects])
    ],
    providers: [SerialFacade],
})
export class SerialStoreModule {}