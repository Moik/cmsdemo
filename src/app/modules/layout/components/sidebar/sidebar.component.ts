import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem, MenuSubItem } from '@data/models';

@Component({
  selector: 'cms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.15s cubic-bezier(.25,.8,.25,1)', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('0.15s cubic-bezier(.25,.8,.25,1)', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
    trigger('showInOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('0.15s ease-in', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.15s ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class SidebarComponent {
  @Input() isSidebarOpened = false;
  @Input() menu!: MenuItem[];

  subMenu: MenuSubItem[] = [];
  showSubMenu = false;

  toggleSubMenu(subMenu?: MenuSubItem[]): void {
    this.showSubMenu = !this.showSubMenu;
    this.subMenu = subMenu ?? [];
  }
}
