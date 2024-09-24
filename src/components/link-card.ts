
import { css, html, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TailwindElement } from './tailwind-element';

import style from '~/styles/link-card.css?inline';

@customElement('link-card')
export class LinkCard extends TailwindElement(style) {

  @property({type: String})
  public title: string = "Card Title";
  
  @property({type: String})
  public description: string = "Optional description; should be kept to one or two lines";

  @property({type: String})
  public target: string = import.meta.url;

  @state()
  private location: URL;

  constructor( ) {
    super();

    this.location = new URL(this.target);
  }

  protected willUpdate(_changedProperties: PropertyValues): void {
    if(_changedProperties.has('target')){
      this.location = new URL(this.target);
    }
  }

  render() {
    return html`
    <a href=${this.location.toString()}>
      <div class="spectrum-Card " tabindex="0" role="figure" >
        <div class="spectrum-Card-body">
          <div class="spectrum-Card-header">
            <div class="spectrum-Card-title spectrum-Heading spectrum-Heading--sizeXS">
              ${this.title}
            </div>
          </div>
          <div class="spectrum-Card-content">
            <div class="spectrum-Card-description">
              ${this.description}
            </div>
          </div>
        </div>
      </div>
    </a>
    `;
  }
}

