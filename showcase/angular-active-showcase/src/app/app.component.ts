import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isAreaCurrent, NAVIGATION_ITEMS } from './utils/navigation-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-active-showcase';
  navigationItems = NAVIGATION_ITEMS;
  isAria = isAreaCurrent;

  input: string;
  checkbox: boolean;
  radio: string;
  select: string;
  textarea: string;

  checkboxControl = new FormControl<boolean>(false, { nonNullable: false });
  radioControl = new FormControl<string>('', { nonNullable: true });
  selectControl = new FormControl<string>('', { nonNullable: false });
  textareaControl = new FormControl<string>('', { nonNullable: false });

  radioButtons = ['radio-01', 'radio-02', 'radio-03'];

  ngOnInit(): void {
    this.checkboxControl.valueChanges.subscribe(
      (value) => (this.checkbox = value)
    );
    this.radioControl.valueChanges.subscribe((value) => (this.radio = value));
    this.selectControl.valueChanges.subscribe((value) => (this.select = value));
    this.textareaControl.valueChanges.subscribe(
      (value) => (this.textarea = value)
    );
  }

  showValues(): void {
    alert(
      JSON.stringify({
        input: this.input,
        checkbox: this.checkbox,
        radio: this.radio,
        select: this.select,
        textarea: this.textarea
      })
    );
  }

  logPagination(evt: CustomEvent) {
    // eslint-disable-next-line no-console
    console.log('Clicked in <db-pagination>: ', evt.detail.target.innerText);
  }
}
