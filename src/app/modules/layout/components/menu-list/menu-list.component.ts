import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from '@data/models';

@Component({
  selector: 'cms-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent {
  @Input() menu: MenuItem[] = [];
}
