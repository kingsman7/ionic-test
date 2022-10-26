import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form:FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    passwordConfirm: ['', [Validators.required]]
  })

  constructor( 
    private fb:FormBuilder
   ) { }

  ngOnInit() {
  }

  register(){
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }

    const { email, password, passwordConfirm } = this.form.getRawValue()
    console.log("🚀 ~ file: login.page.ts ~ line 31 ~ LoginPage ~ login ~ email, password", email, password, passwordConfirm)
    console.log('value', this.form.value);
    
  }

}
