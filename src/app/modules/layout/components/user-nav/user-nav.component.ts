import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'cms-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserNavComponent {
  @Output() logout = new EventEmitter<void>();
  @ViewChild('menu', { static: true }) menu!: MatMenu;
}
