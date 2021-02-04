import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() outName = new EventEmitter<string>();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  };

  onSubmit(){
    this.outName.emit(this.form.value);
  }

}
