/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `slide-indicator`
 * 
 * @demo index.html
 * @element slide-indicator
 */
export class SlideIndicator extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
        return "slide-indicator";
    }

    constructor() {
        super();
    }

    static get properties() {
    return {
      ...super.properties,
      currentIndex: { type: Number },
      totalSlides: { type: Number }
    };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display: block;
            position: absolute;
            bottom: var(--ddd-spacing-4);
        }

        .dot.active {
            color: var(--ddd-theme-default-skyBlue);
        }

        .dot {
            color: var(--ddd-theme-default-limestoneGray);
            padding: var(--ddd-spacing-1);
            cursor: pointer;
        }

        .dot:not(.active):hover {
            opacity: 0.7;
        }
    `];
    }

    render() {
        let dots = [];
        for (let i = 0; i < this.totalSlides; i++) {
            dots.push(html`
                <span @click="${this._handleDotClick}" 
                data-index="${i}" 
                class = "dot ${i === this.currentIndex ? "active" : ""}">
                ●
                </span>`);
        }
        return html`
            <div class="dots">
                ${dots}
            </div>`;
    }

    _handleDotClick(e) {
        const indexChange = new CustomEvent("play-list-index-changed", {
        composed: true,
        bubbles: true,
        detail: {
            index: parseInt(e.currentTarget.dataset.index)
            },
        });
        this.dispatchEvent(indexChange);
    }

}

globalThis.customElements.define(SlideIndicator.tag, SlideIndicator);