import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from'@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form:FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor( 
    private fb:FormBuilder
   ) { }

  ngOnInit() {
  }

  login(){
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }

    const { email, password } = this.form.getRawValue()
    console.log("🚀 ~ file: login.page.ts ~ line 31 ~ LoginPage ~ login ~ email, password", email, password)
    console.log('value', this.form.value);
    
  }

}
