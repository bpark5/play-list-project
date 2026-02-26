/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-slide`
 * 
 * @demo index.html
 * @element play-list-slide
 */
export class PlayListSlide extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
        return "play-list-slide";
    }

    static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);