import { Layouts, Themes } from '@data/enums';
import { createAction, props } from '@ngrx/store';

export enum LayoutActionTypes {
  SET_LAYOUT = '[Layout] Set User Layout',
  SET_THEME = '[Layout] Set User Theme',
  TOGGLE_SIDEBAR = '[Layout] Toggle Sidebar',
}

export const setUserLayout = createAction(LayoutActionTypes.SET_LAYOUT, props<{ layout: Layouts }>());
export const setUserTheme = createAction(LayoutActionTypes.SET_THEME, props<{ theme: Themes }>());
export const toggleSidebar = createAction(LayoutActionTypes.TOGGLE_SIDEBAR);
