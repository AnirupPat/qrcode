import { Component, OnInit, NgModule } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@NgModule({
	
})

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	isLinear = false;
  	firstFormGroup: FormGroup;
  	secondFormGroup: FormGroup;
	
  constructor(
	//private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
	
  }

}
