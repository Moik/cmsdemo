import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from '.';
import { FEATURE_KEY, reducers } from './layout.store';

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers), EffectsModule.forFeature(effects)],
})
export class LayoutStoreModule {}
