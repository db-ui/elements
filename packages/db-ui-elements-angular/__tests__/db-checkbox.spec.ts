import { async, ComponentFixture } from '@angular/core/testing';

import {
  ConfigureFn,
  configureTests
} from '../projects/lib/src/config.testing';
import { DebugElement, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DBUIElementsModule } from '../projects/lib/src';

@Component({
  template: `<db-checkbox
    type="text"
    [(ngModel)]="itemIsChecked"
  ></db-checkbox>`
})
// @ts-ignore
class TestBooleanValueAccessorComponent {
  itemIsChecked: boolean = false;
}

describe('DbCheckbox', () => {
  let dbCheckboxEl: DebugElement;
  let fixture: ComponentFixture<TestBooleanValueAccessorComponent>;

  beforeEach(async(() => {
    const configure: ConfigureFn = (testBed) => {
      testBed.configureTestingModule({
        imports: [FormsModule, DBUIElementsModule],
        declarations: [TestBooleanValueAccessorComponent]
      });
    };

    configureTests(configure).then((testBed) => {
      fixture = testBed.createComponent(TestBooleanValueAccessorComponent);
      fixture.detectChanges();
      dbCheckboxEl = fixture.debugElement.query(By.css('db-checkbox'));
    });
  }));

  it('dbChange updates the bound component attribute should update', () => {
    const { componentInstance: myAngularComponent } = fixture;
    dbCheckboxEl.nativeElement.checked = true;
    dbCheckboxEl.nativeElement.dispatchEvent(
      new CustomEvent('dbChange', { detail: { value: true } })
    );
    expect(myAngularComponent.itemIsChecked).toEqual(true);
  });
});
