import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Themes } from '@data/enums';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private activeTheme: Themes = Themes.DARK;
  private renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  applyUserTheme(newTheme: Themes): void {
    this.renderer.removeClass(this.document.body, this.activeTheme);
    this.renderer.addClass(this.document.body, `${newTheme}`);
    this.activeTheme = newTheme;
  }
}
