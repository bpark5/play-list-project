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
      currentIndex: {type: Number},
      totalSlide: {type: Number}
    };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            width: 100%;
        }

        .slide-arrow-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

        .left-arrow, .right-arrow {
        background-color: white;
        color: var(--ddd-theme-default-link);
        border: var(--ddd-border-md);
        border-color: var(--ddd-theme-default-link);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        margin: 0 var(--ddd-spacing-1);
        border-radius: var(--ddd-radius-circle);
        font-size: var(--ddd-font-size-xs);
        cursor: pointer;
        }

        .left-arrow:hover, .right-arrow:hover {
            opacity: 0.7;
        }

        .left-arrow:disabled, .right-arrow:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
    `];
    }

    render() {
        return html ` 
        <div class=slide-arrow-wrapper>
            <button class="left-arrow" @click=${() => this.dispatchEvent(new CustomEvent("previous-slide", {composed: true, bubbles: true}))} ?disabled=${this.currentIndex === 0}><strong>‹</strong></button>
            <button class="right-arrow" @click=${() => this.dispatchEvent(new CustomEvent("next-slide", {composed: true, bubbles: true}))} ?disabled=${this.currentIndex === this.totalSlides - 1}><strong>›</strong></button>
        </div>`;
    }

}

globalThis.customElements.define(SlideArrow.tag, SlideArrow);