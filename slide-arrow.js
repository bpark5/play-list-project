/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `slide-arrow`
 * 
 * @demo index.html
 * @element slide-arrow
 */
export class SlideArrow extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
        return "slide-arrow";
    }

    constructor() {
        super();
        this.direction = "left";
    }

    static get properties() {
    return {
      ...super.properties,
      direction : { type: String },
    };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display: block;
        }

        .slide-arrow {
            border-radius: var(--ddd-radius-circle);
            border: none;
        }
    `];
    }

    render() {
        return html ` 
        <button class="slide-arrow">
            ${this.direction === "left" ? "<" : ">"}
        </button>`;
    }

}

globalThis.customElements.define(SlideArrow.tag, SlideArrow);