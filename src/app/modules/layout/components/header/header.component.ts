import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Layouts, Themes } from '@data/enums';
import { MenuItem } from '@data/models';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() layout!: Layouts;
  @Input() theme!: Themes;
  @Input() menu: MenuItem[] = [];
  @Output() logout = new EventEmitter<void>();
  @Output() changeLayout = new EventEmitter<Layouts>();
  @Output() changeTheme = new EventEmitter<Themes>();
  @Output() toggleSidebar = new EventEmitter<void>();

  layouts = Layouts;
}
