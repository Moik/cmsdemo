import { Component, OnInit } from '@angular/core';
import { Layouts, Themes } from '@data/enums';
import { MenuItem } from '@data/models';
import {
  selectIsSidebarOpened,
  selectUserLayout,
  selectUserTheme,
  setUserLayout,
  setUserTheme,
  toggleSidebar,
} from '@layout/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'cms-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  layout$!: Observable<Layouts>;
  theme$!: Observable<Themes>;
  isSidebarOpened$!: Observable<boolean>;

  layouts = Layouts;

  menu: MenuItem[] = [
    {
      icon: 'work',
      name: 'Activities',
      items: [{ icon: 'list', name: 'Test1', navigation: '/' }],
    },
    {
      icon: 'analytics',
      name: 'Reports',
      items: [
        { icon: 'list', name: 'Test2', navigation: '/' },
        { icon: 'list', name: 'Test23', navigation: '/' },
      ],
    },
    {
      icon: 'list',
      name: 'Lists',
      items: [{ icon: 'list', name: 'Test3', navigation: '/' }],
    },
    {
      icon: 'admin_panel_settings',
      name: 'Administration',
      items: [{ icon: 'list', name: 'Test4', navigation: '/' }],
    },
    {
      icon: 'folder',
      name: 'Library',
      items: [{ icon: 'list', name: 'Test5', navigation: '/' }],
    },
  ];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.layout$ = this.store.select(selectUserLayout);
    this.theme$ = this.store.select(selectUserTheme);
    this.theme$.pipe(take(1)).subscribe(theme => this.setUserTheme(theme));
    this.isSidebarOpened$ = this.store.select(selectIsSidebarOpened);
  }

  setUserLayout(layout: Layouts): void {
    this.store.dispatch(setUserLayout({ layout }));
  }

  setUserTheme(theme: Themes): void {
    this.store.dispatch(setUserTheme({ theme }));
  }

  toggleSidebar(): void {
    this.store.dispatch(toggleSidebar());
  }
}
