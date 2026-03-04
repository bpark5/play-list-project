/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./play-list-slide.js";
import "./slide-arrow.js";
import "./slide-indicator.js";

/**
 * `play-list-project`
 * 
 * @demo index.html
 * @element play-list-project
 */
export class PlayListProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-project";
  }

  constructor() {
    super();
    this.currentIndex = 0;
    this.totalSlides = 0;
    this.slides = [];
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentIndex: {type: Number},
      totalSlides: {type: Number},
      slides: {type: Array}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        background-color: var(--ddd-theme-default-slateMaxLight);
        margin: var(--ddd-spacing-8);
        border-radius: var(--ddd-radius-xs);
        position: relative;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4) var(--ddd-spacing-11);
      }
    `];
  }

  firstUpdated() {
    this.slides = Array.from(this.querySelectorAll("play-list-slide"));
    this.totalSlides = this.slides.length;
    this._updateSlides()
  }

  _updateSlides() {
      this.slides.forEach((slide, i) => slide.active = (i === this.currentIndex));  
        const indexChange = new CustomEvent("play-list-index-changed", {
          composed: true,
          bubbles: true,
          detail: {
              index: this.currentIndex
          },
        });
        this.dispatchEvent(indexChange);
      };

  nextSlide() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex ++;
    }
    this._updateSlides();
  }

  previousSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    this._updateSlides();
  }

  handleEvent(e) {
    this.currentIndex = e.detail.index;
    this._updateSlides();
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <slide-arrow 
        .currentIndex=${this.currentIndex}
        .totalSlides=${this.totalSlides}
        @previous-slide="${this.previousSlide}"   
        @next-slide="${this.nextSlide}">   
      </slide-arrow>
      <slot></slot>
      <slide-indicator 
        @play-list-index-changed="${this.handleEvent}"
        .currentIndex="${this.currentIndex}" 
        .totalSlides="${this.totalSlides ? this.slides.length : 0 }">
      </slide-indicator>
    </div>`;
  }
  
}



globalThis.customElements.define(PlayListProject.tag, PlayListProject);