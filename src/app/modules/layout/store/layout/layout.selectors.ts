import { createSelector } from '@ngrx/store';

import { getLayoutStoreState, LayoutStoreState } from '../layout.store';
import { LayoutState } from './layout.reducer';

export const selectLayoutState = createSelector(getLayoutStoreState, (state: LayoutStoreState) => state.layout);

export const selectUserLayout = createSelector(selectLayoutState, (state: LayoutState) => state.layout);
export const selectUserTheme = createSelector(selectLayoutState, (state: LayoutState) => state.theme);
export const selectIsSidebarOpened = createSelector(selectLayoutState, (state: LayoutState) => state.isSidebarOpened);
