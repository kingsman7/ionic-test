import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    private fb:FormBuilder,
    private auth: AuthService,
    private router: Router
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

    this.auth.register(email, password)
    .then(() => {
      this.router.navigate(["/home"])
    })
    .catch(err => {
      console.log("🚀 ~ file: register.page.ts ~ line 41 ~ RegisterPage ~ register ~ err", err)
    })
    
  }

}
