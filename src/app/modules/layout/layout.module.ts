import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { SRSolutionsCommonModule } from '@sr-solutions/common';

import { components } from './components';
import { containers } from './containers';
import { LayoutStoreModule } from './store/layout-store.module';

@NgModule({
  declarations: [containers, components],
  imports: [
    CommonModule,
    LayoutStoreModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule,
    SatPopoverModule,
    SRSolutionsCommonModule,
  ],
})
export class LayoutModule {}
