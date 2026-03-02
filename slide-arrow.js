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
    }

    static get properties() {
    return {
      ...super.properties,
    };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display: block;
        }

        .slide-arrow-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-2);
      }

        .left-arrow, .right-arrow {
        background-color: white;
        color: var(--ddd-theme-default-beaverBlue);
        border: var(--ddd-border-md) solid var(--ddd-theme-default-beaverBlue);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-rounded);
        font-size: var(--ddd-font-size-3xs);
        }

        button:hover {
            opacity: 0.8;
        }
    `];
    }

    render() {
        return html ` 
        <div class=slide-arrow-wrapper>
            <button class="left-arrow" @click=${() => this.dispatchEvent(new CustomEvent("previous-slide", {composed: true, bubbles: true}))}>Previous</button>
            <button class="right-arrow" @click=${() => this.dispatchEvent(new CustomEvent("next-slide", {composed: true, bubbles: true}))}>Next</button>
        </div>`;
    }

}

globalThis.customElements.define(SlideArrow.tag, SlideArrow);