import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SerialEffects } from './serial.effects';
import { SerialReducer } from './serial.reducer';
import { SerialFacade } from './serial.facade';

@NgModule({
    imports: [
        CommonModule,
        // StoreModule.forRoot({ state: SerialReducer }),
        // //StoreModule.forRoot({ state: SerialReducer }),
        // EffectsModule.forRoot([SerialEffects])
    ],
    // providers: [SerialEffects]
})
export class SerialStoreModule {}