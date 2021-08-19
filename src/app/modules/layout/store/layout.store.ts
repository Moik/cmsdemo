import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { layoutReducer, LayoutState } from './layout/layout.reducer';

export interface LayoutStoreState {
  layout: LayoutState;
}

export const reducers: ActionReducerMap<LayoutStoreState> = {
  layout: layoutReducer,
};

export const FEATURE_KEY = 'layout';

export const getLayoutStoreState = createFeatureSelector<LayoutStoreState>(FEATURE_KEY);
