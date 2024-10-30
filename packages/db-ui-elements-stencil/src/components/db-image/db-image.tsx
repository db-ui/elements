import { Component, h, Host, Prop } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-image',
  styleUrl: 'db-image.scss'
})
export class DbImage {
  /**
   * The image src URL.
   */
  @Prop({ reflect: true }) src!: string;
  /**
   * Optional modern image format srcset URL (like avif or webp).
   */
  @Prop({ reflect: false }) modernformat: string;
  /**
   * Optional srcset for high density images
   */
  @Prop({ reflect: false }) srcset: string;
  /**
   * The alt attribute is used by "screen reader" software so that a person who is listening to the content of a webpage (for instance, a person who is blind) can interact with this element.
   */
  @Prop({ reflect: true }) alt!: string;

  /**
   * Width for the image
   */
  @Prop({ reflect: true }) width!: number;

  /**
   * Height for the image
   */
  @Prop({ reflect: true }) height!: number;
  /**
   * Optional lazy loading attribute
   */
  @Prop({ reflect: false }) loading: 'lazy';
  /**
   * Optional caption for the image
   */
  @Prop({ reflect: false }) caption: string;
  /**
   * Optional responsive media queries as array of objects '[{srcset:"/path/to/picture.extension", media:"(min-width: 768px)"}]'
   */
  @Prop({ reflect: false }) responsivemediaquery: string;
  /**
   * Optional id for the caption aria label - otherwise random id will be set
   */
  @Prop({ reflect: false }) ariaid: string = 'image-' + uuid();

  private getBasicImage() {
    return (
      <img
        class="elm-image"
        alt={this.alt}
        src={this.src}
        width={this.width}
        srcSet={this.srcset}
        height={this.height}
        loading={this.loading}
        aria-labelledby={this.caption && this.ariaid}
      />
    );
  }
  private basicImageCaptionWrapper() {
    if (this.caption !== undefined) {
      return (
        <figure>
          {this.getBasicImage()}
          <figcaption id={this.ariaid}>{this.caption}</figcaption>
        </figure>
      );
    } else {
      {
        return this.getBasicImage();
      }
    }
  }

  private getPictureWrapper() {
    const fileExtension = this.modernformat.split('.').pop().toLowerCase();
    return (
      <picture>
        <source srcSet={this.modernformat} type={`'image/${fileExtension}`} />
        {this.getBasicImage()}
      </picture>
    );
  }
  private getResponsivePictureWrapper() {
    return (
      <picture>
        {JSON.parse(this.responsivemediaquery).map((query, index) => (
          <source
            key={`picture-${index}`}
            srcSet={query.srcset}
            media={query.media}
          />
        ))}
        {this.getBasicImage()}
      </picture>
    );
  }

  private pictureCaptionWrapper() {
    if (this.caption !== undefined) {
      return (
        <figure>
          {this.getPictureWrapper()}
          <figcaption id={this.ariaid}>{this.caption}</figcaption>
        </figure>
      );
    } else {
      {
        return this.getPictureWrapper();
      }
    }
  }

  render() {
    return (
      <Host>
        {(this.modernformat && this.pictureCaptionWrapper()) ||
          (this.responsivemediaquery && this.getResponsivePictureWrapper()) ||
          this.basicImageCaptionWrapper()}
      </Host>
    );
  }
}
