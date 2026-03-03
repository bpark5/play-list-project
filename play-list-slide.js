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

    constructor() {
        super();
        this.topHeading = "";
        this.bottomHeading = "";
        this.active = false;
    }

    static get properties() {
    return {
      ...super.properties,
      topHeading: { type: String },
      bottomHeading: { type: String },
      active: { type: Boolean, reflect: true }
    };
    }

    static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        }

        .top-heading {
            font: var(--ddd-font-primary);
            color: var(--ddd-theme-default-link);
        }

        .bottom-heading {
            font: var(--ddd-font-primary);
            color: var(--ddd-theme-default-beaverBlue);
        }

        .play-list-slide-information {
            color: var(--ddd-theme-default-beaverBlue);
        }

        :host([active])
        {
            display: block;
        }

        :host(:not([active]))
        {
            display: none;
        }

        .play-list-slide-information {
            max-height: 200px;
            overflow-y: auto;
        }
    `];
    }

    render() {
        return html `
        <div class="top-heading">
            <h6>${this.topHeading}</h6>
        </div>
        <div class="bottom-heading">
            <h1>${this.bottomHeading}</h1>
        </div> 
        <slot class="play-list-slide-information"></slot>`;
    }

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);