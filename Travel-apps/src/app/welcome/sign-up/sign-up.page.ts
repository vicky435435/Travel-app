import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signupForm!:FormGroup
  constructor() { }

  ngOnInit() {
     this.initForm();
  }

  initForm(){
    this.signupForm = new FormGroup({
      name: new FormControl(null, {validators:[Validators.required]}),
      email: new FormControl(null, {validators:[Validators.required, Validators.email]}),
      password: new FormControl(null, {validators:[Validators.required, Validators.minLength(8)]}),
    })
  }
  onSubmit(){
    
  }

}
