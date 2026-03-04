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
        height: 350px;
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
            font: var(--ddd-font-size-4xs) var(--ddd-font-navigation);
            max-height: 190px;
            overflow-y: auto;
            position: absolute;
            margin: 0 var(--ddd-spacing-30) 0 0;  
        }

        :host([active])
        {
            display: block;
        }

        :host(:not([active]))
        {
            display: none;
        }

    
        .play-list-slide-line {
            border: var(--ddd-border-xs);
            border-color: var(--ddd-theme-default-skyBlue);
            width: var(--ddd-spacing-14);
            position: absolute;
            margin: var(--ddd-spacing-2) 0 0 0 ;
            
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
        <hr class="play-list-slide-line">
        <div class="play-list-slide-information">
            <slot></slot>
        </div>`;
    }

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);