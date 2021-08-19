import { Layouts, Themes } from '@data/enums';
import { createReducer, on } from '@ngrx/store';

import { setUserLayout, setUserTheme, toggleSidebar } from './layout.actions';

export interface LayoutState {
  layout: Layouts;
  theme: Themes;
  isSidebarOpened: boolean;
}

export const initialState: LayoutState = {
  layout: Layouts.MODERN,
  theme: Themes.DARK,
  isSidebarOpened: false,
};

export const layoutReducer = createReducer(
  initialState,
  on(
    setUserLayout,
    (state, { layout }): LayoutState => ({ ...state, layout, isSidebarOpened: layout === Layouts.THIN })
  ),
  on(setUserTheme, (state, { theme }): LayoutState => ({ ...state, theme })),
  on(toggleSidebar, (state): LayoutState => ({ ...state, isSidebarOpened: !state.isSidebarOpened }))
);
