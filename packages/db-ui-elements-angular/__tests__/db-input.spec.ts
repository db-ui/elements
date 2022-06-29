import { async, ComponentFixture } from '@angular/core/testing';

import {
  ConfigureFn,
  configureTests
} from '../projects/lib/src/config.testing';
import { DebugElement, Component } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DBUIElementsModule } from '../projects/lib/src';

@Component({
  template: `<db-input
    type="text"
    [(ngModel)]="testText"
    (dbInput)="onInput($event.target.value)"
  ></db-input>`
})
class TestTextValueAccessorComponent {
  testText: string = '';

  onInput() {}
}

describe('DbInput - Text Value', () => {
  let dbInputEl: DebugElement;
  let fixture: ComponentFixture<TestTextValueAccessorComponent>;

  beforeEach(async(() => {
    const configure: ConfigureFn = (testBed) => {
      testBed.configureTestingModule({
        imports: [FormsModule, DBUIElementsModule],
        declarations: [TestTextValueAccessorComponent]
      });
    };

    configureTests(configure).then((testBed) => {
      fixture = testBed.createComponent(TestTextValueAccessorComponent);
      fixture.detectChanges();
      dbInputEl = fixture.debugElement.query(By.css('db-input'));
    });
  }));

  it('on dbChange type="text" the bound component attribute should update', () => {
    const { componentInstance: myAngularComponent } = fixture;
    dbInputEl.nativeElement.value = 'text';
    dbInputEl.nativeElement.dispatchEvent(
      new CustomEvent('dbChange', { detail: { value: 'text' } })
    );
    expect(myAngularComponent.testText).toEqual('text');
  });

  it('dbInput event should call local method', () => {
    const { componentInstance: myAngularComponent } = fixture;
    const fakeOnInput = jest.fn();
    myAngularComponent.onInput = fakeOnInput;
    dbInputEl.triggerEventHandler('dbInput', { target: { value: 'fired' } });

    expect(fakeOnInput).toHaveBeenCalledTimes(1);
    expect(fakeOnInput).toHaveBeenCalledWith('fired');
  });
});

@Component({
  template: `<db-input type="number" [(ngModel)]="testNumber"></db-input>`
})
class TestNumberValueAccessorComponent {
  testNumber: number = 0;
}

describe('DbInput - Number Value', () => {
  let dbInputEl: DebugElement;
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
      dbInputEl = fixture.debugElement.query(By.css('db-input'));
    });
  }));

  it('should update value to number on dbInputEvent', () => {
    const { componentInstance: myAngularComponent } = fixture;
    dbInputEl.nativeElement.value = 50;
    dbInputEl.nativeElement.dispatchEvent(
      new CustomEvent('dbChange', { detail: { value: 50 } })
    );
    expect(myAngularComponent.testNumber).toEqual(50);
  });
});

@Component({
  template: `<form [formGroup]="form">
    <db-input type="text" formControlName="test"></db-input>
  </form>`
})
class TestDisabledValueAccessorComponent {
  form = this.formBuilder.group({
    // disabled state will be managed for us by angular
    // and now we can later call `this.form.controls.test.enable()`
    test: this.formBuilder.control({ value: 'test', disabled: true })
  });

  constructor(private formBuilder: FormBuilder) {}
}

describe('DbInput - Disabled state', () => {
  let dbInputEl: DebugElement;
  let fixture: ComponentFixture<TestDisabledValueAccessorComponent>;

  beforeEach(async(() => {
    const configure: ConfigureFn = (testBed) => {
      testBed.configureTestingModule({
        imports: [ReactiveFormsModule, FormsModule, DBUIElementsModule],
        declarations: [TestDisabledValueAccessorComponent]
      });
    };

    configureTests(configure).then((testBed) => {
      fixture = testBed.createComponent(TestDisabledValueAccessorComponent);
      fixture.detectChanges();
      dbInputEl = fixture.debugElement.query(By.css('db-input'));
    });
  }));

  it('should support setting disabled state via the ValueAccessor', () => {
    expect(dbInputEl.nativeElement.disabled).toBe(true);
  });
});
