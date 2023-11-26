import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  input: string;
  checkbox: boolean;
  radio: string;
  select: string;
  textarea: string;
  toggle: boolean;

  checkboxControl = new FormControl<boolean>(false, { nonNullable: false });
  radioControl = new FormControl<string>('', { nonNullable: true });
  selectControl = new FormControl<string>('', { nonNullable: false });
  textareaControl = new FormControl<string>('', { nonNullable: false });

  radioButtons = ['Radio 01', 'Radio 02', 'Radio 03'];

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
        textarea: this.textarea,
        toggle: this.toggle
      })
    );
  }
}
