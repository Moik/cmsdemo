import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LayoutService } from '../../services';
import { setUserTheme } from './layout.actions';

@Injectable()
export class LayoutEffects {
  setUserTheme$: Observable<void> = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(setUserTheme),
        map(({ theme }) => this.service.applyUserTheme(theme))
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private service: LayoutService) {}
}
