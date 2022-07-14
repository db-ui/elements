import { async, ComponentFixture } from '@angular/core/testing';

import {
  ConfigureFn,
  configureTests
} from '../projects/lib/src/config.testing';
import { DebugElement, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DBUIElementsModule } from '../projects/lib/src/index';

// @ts-ignore
@Component({
  template: `<db-progress
    min="0"
    max="100"
    type="text"
    name="db-progress"
    ngDefaultControl
    [(ngModel)]="testText"
  ></db-progress>`
})
class TestNumberValueAccessorComponent {
  testText: number = 0;
}

describe('DbProgress', () => {
  let dbProgressEl: DebugElement;
  let fixture: ComponentFixture<TestNumberValueAccessorComponent>;

  beforeEach(async(() => {
    const configure: ConfigureFn = (testBed) => {
      testBed.configureTestingModule({
        imports: [FormsModule, DBUIElementsModule],
        declarations: [TestNumberValueAccessorComponent]
      });
    };

    configureTests(configure).then((testBed) => {
      fixture = testBed.createComponent(TestNumberValueAccessorComponent);
      fixture.detectChanges();
      dbProgressEl = fixture.debugElement.query(By.css('db-progress'));
    });
  }));

  it('on myChange value the bound component attribute should update', () => {
    const { componentInstance: myAngularComponent } = fixture;
    dbProgressEl.nativeElement.value = 50;
    dbProgressEl.nativeElement.dispatchEvent(
      new CustomEvent('myChange', { detail: { value: 50 } })
    );
    expect(myAngularComponent.testText).toEqual(50);
  });
});
