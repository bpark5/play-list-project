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
        height: 300px;
        }

        .top-heading h4{
            font: var(--ddd-font-size-sm) var(--ddd-font-primary);
            color: var(--ddd-theme-default-link);
            
        }

        .bottom-heading h1{
            font: var(--ddd-font-size-xxl) var(--ddd-font-primary);
            color: var(--ddd-theme-default-beaverBlue);
            margin: 0 0 var(--ddd-spacing-4) 0;
            
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
            max-height: 140px;
            overflow-y: auto;
            margin: var(--ddd-spacing-2) 0 var(--ddd-spacing-10) 0;
        }
    `];
    }

    render() {
        return html `
        <div class="top-heading">
            <h4><strong>${this.topHeading}</strong></h4>
        </div>
        <div class="bottom-heading">
            <h1><strong>${this.bottomHeading}</strong></h1>
        </div> 
        <div class="play-list-slide-information">
            <slot></slot>
        </div>`;
    }

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);