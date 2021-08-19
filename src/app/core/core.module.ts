import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { buildSpecificModules } from './build-specifics';
import { throwIfAlreadyLoaded } from './guards';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    ...buildSpecificModules,
  ],
  providers: [],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
