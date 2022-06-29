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
  template: `<db-radio [(ngModel)]="isChecked"></db-radio>`
})
class TestBooleanValueAccessorComponent {
  isChecked: boolean = false;
}

describe('DbRadio', () => {
  let dbRadioEl: DebugElement;
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
      dbRadioEl = fixture.debugElement.query(By.css('db-radio'));
    });
  }));

  it('on dbChange checked the bound component attribute should update', () => {
    const { componentInstance: myAngularComponent } = fixture;
    dbRadioEl.nativeElement.checked = true;
    dbRadioEl.nativeElement.dispatchEvent(
      new CustomEvent('dbChange', { detail: { checked: true } })
    );
    expect(myAngularComponent.isChecked).toEqual(true);
  });
});
