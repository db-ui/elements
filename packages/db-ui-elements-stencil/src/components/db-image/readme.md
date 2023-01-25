# db-image



{/* Auto Generated Below */}


## Properties

| Property               | Attribute              | Description                                                                                                                                                                               | Type     | Default                       |
| ---------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------- |
| `alt` _(required)_     | `alt`                  | The alt attribute is used by "screen reader" software so that a person who is listening to the content of a webpage (for instance, a person who is blind) can interact with this element. | `string` | `undefined`                   |
| `ariaid`               | `ariaid`               | Optional id for the caption aria label - otherwise random id will be set                                                                                                                  | `string` | `'db-' + uuid();()` |
| `caption`              | `caption`              | Optional caption for the image                                                                                                                                                            | `string` | `undefined`                   |
| `height` _(required)_  | `height`               | Height for the image                                                                                                                                                                      | `number` | `undefined`                   |
| `loading`              | `loading`              | Optional lazy loading attribute                                                                                                                                                           | `"lazy"` | `undefined`                   |
| `modernformat`         | `modernformat`         | Optional modern image format srcset URL (like avif or webp).                                                                                                                              | `string` | `undefined`                   |
| `responsivemediaquery` | `responsivemediaquery` | Optional responsive media queries as array of objects '[{srcset:"/path/to/picture.extension", media:"(min-width: 768px)"}]'                                                               | `string` | `undefined`                   |
| `src` _(required)_     | `src`                  | The image src URL.                                                                                                                                                                        | `string` | `undefined`                   |
| `srcset`               | `srcset`               | Optional srcset for high density images                                                                                                                                                   | `string` | `undefined`                   |
| `width` _(required)_   | `width`                | Width for the image                                                                                                                                                                       | `number` | `undefined`                   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
