import { Component } from '@angular/core';
import {
  DbIcon,
  DbChip,
  DbTag,
  DbProgress,
  DbImage,
  DbLogo,
  DbLink
} from '../../../../../../packages/db-ui-elements-angular/projects/lib/src';

@Component({
  selector: 'app-other-elements',
  templateUrl: './other-elements.component.html',
  standalone: true,
  imports: [DbIcon, DbChip, DbTag, DbProgress, DbImage, DbLogo, DbLink]
})
export class OtherElementsComponent {}
