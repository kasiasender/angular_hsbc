import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tm-submit-if-valid',
  templateUrl: './submit-if-valid.component.html',
  styleUrls: ['./submit-if-valid.component.css']
})
export class SubmitIfValidComponent {
  @Input() form: FormGroup;
  @Output() validated = new EventEmitter<void>();

  handleClick() {
    Object.keys(this.form.controls)
      .forEach(key => this.form.controls[key].markAsDirty());

    if (this.form.valid) {
      this.validated.emit();
    }
  }
}
