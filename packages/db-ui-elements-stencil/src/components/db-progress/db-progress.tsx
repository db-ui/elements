import { Component, h, Prop } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-progress',
  styleUrl: 'db-progress.scss'
})
export class DbProgress {
  /**
   * The currentValue of the progress indicator.
   */
  @Prop({ reflect: true }) value: number;

  /**
   * The currentValue of the progress indicator.
   */
  @Prop({ reflect: true }) max: number;

  /**
   * Optional id - otherwise random id will be provided
   */

  @Prop({ reflect: false }) htmlid: string = 'progress-' + uuid();
  /**
   * The percentage sign - default %.
   */
  @Prop({ reflect: false }) percentagesign = '%';
  /**
   * As a circle
   */
  @Prop({ reflect: false }) circle: boolean;
  /**
   * Indeterminate
   */
  @Prop({ reflect: false }) indeterminate = false;

  render() {
    return (
      <div class="elm-progress">
        <progress
          value={this.value}
          max={this.max}
          id={this.htmlid}
          {...{ indeterminate: this.indeterminate }}
          style={
            this.circle === true
              ? { ['--progress-conic']: `${this.value}` }
              : { ['']: '' }
          }
          aria-describedby={this.htmlid + '-label'}
        />
        {!this.indeterminate && (
          <label
            htmlFor={this.htmlid}
            id={this.htmlid + '-label'}
            aria-hidden="true"
          >
            {this.value}
            {this.percentagesign}
          </label>
        )}
      </div>
    );
  }
}
