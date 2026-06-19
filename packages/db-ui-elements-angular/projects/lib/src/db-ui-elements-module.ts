import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '@db-ui/elements/loader';

import { DIRECTIVES } from './stencil-generated';
import { BooleanValueAccessor } from './boolean-value-accessor';
import { SelectValueAccessor } from './select-value-accessor';
import { TextValueAccessor } from './text-value-accessor';

defineCustomElements(window);

const DECLARATIONS = [
  ...DIRECTIVES,

  // Value Accessors
  BooleanValueAccessor,
  SelectValueAccessor,
  TextValueAccessor
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DBUIElementsModule {}
