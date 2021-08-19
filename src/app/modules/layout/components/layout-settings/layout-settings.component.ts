import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Layouts, Themes } from '@data/enums';

@Component({
  selector: 'cms-layout-settings',
  templateUrl: './layout-settings.component.html',
  styleUrls: ['./layout-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSettingsComponent {
  @Input() layout!: Layouts;
  @Input() theme!: Themes;
  @Output() changeLayout = new EventEmitter<Layouts>();
  @Output() changeTheme = new EventEmitter<Themes>();

  layouts = Layouts;
  themes = Themes;

  isDarkTheme(): boolean {
    return this.theme === Themes.DARK;
  }
}
