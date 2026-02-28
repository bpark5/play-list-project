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
        this.secondHeading = "";
    }

    static get properties() {
    return {
      ...super.properties,
      topHeading: { type: String },
      bottomHeading: { type: String },
    };
    }

    static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        }

        .top-heading h4 {
            color: var(--ddd-theme-primary);
        }

        .bottom-heading h2 {
            color: var(--ddd-theme-primary);
        }
    `];
    }

    render() {
        return html `
        <div class="top-heading">
            <h3>${this.topHeading}</h3>
        </div>
        <div class="bottom-heading">
            <h1>${this.bottomHeading}</h1>
        </div> 
        <slot class="play-list-slide-information"></slot>`;
    }

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);