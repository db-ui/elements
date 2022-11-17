import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '@db-ui/elements/loader';

import { BooleanValueAccessor } from './boolean-value-accessor';
import {
  DbBrand,
  DbBreadcrumb,
  DbButton,
  DbChip,
  DbCheckbox,
  DbDropdown,
  DbAccordion,
  DbFooter,
  DbHeader,
  DbIcon,
  DbImage,
  DbInput,
  DbLink,
  DbLinklist,
  DbLogo,
  DbMeta,
  DbMetanavigation,
  DbOverflowMenu,
  DbPage,
  DbProgress,
  DbRadio,
  DbSelect,
  DbSidenavi,
  DbTabBar,
  DbTable,
  DbTag,
  DbTextarea,
  DbToggle,
  DbPagination,
  DbCards,
  DbCard,
  DbTab,
  DbHeadline,
  DbLanguageSwitcher,
  DbMainnavigation,
  DbNotification,
  DbNotifications
} from './components';
import { SelectValueAccessor } from './select-value-accessor';
import { TextValueAccessor } from './text-value-accessor';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  DbBrand,
  DbBreadcrumb,
  DbButton,
  DbCard,
  DbCards,
  DbChip,
  DbCheckbox,
  DbDropdown,
  DbAccordion,
  DbFooter,
  DbHeader,
  DbHeadline,
  DbIcon,
  DbImage,
  DbInput,
  DbLanguageSwitcher,
  DbLink,
  DbLinklist,
  DbLogo,
  DbMainnavigation,
  DbMeta,
  DbMetanavigation,
  DbNotification,
  DbNotifications,
  DbOverflowMenu,
  DbPage,
  DbPagination,
  DbProgress,
  DbRadio,
  DbSelect,
  DbSidenavi,
  DbTab,
  DbTabBar,
  DbTable,
  DbTag,
  DbTextarea,
  DbToggle,

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
