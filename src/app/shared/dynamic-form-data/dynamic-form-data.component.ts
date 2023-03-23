import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-data',
  templateUrl: './dynamic-form-data.component.html',
  styleUrls: ['./dynamic-form-data.component.css'],
})
export class DynamicFormDataComponent {
  @Input() controls: any;
  @Input() form: FormGroup | undefined;
  @Output() onFormSubmit = new EventEmitter();

  onSubmit() {
    this.onFormSubmit.emit(this.form?.value);
  }
}
