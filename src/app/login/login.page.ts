import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { FormBuilder, FormGroup, Validators } from'@angular/forms'
import { Router } from '@angular/router';

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
    private fb:FormBuilder,
    private auth:AuthService,
    private router: Router
   ) { }

  ngOnInit() {
  }

  login(){
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }
    const { email, password } = this.form.getRawValue()
    this.auth.login(email, password)
    .then(() => {
      this.router.navigate(["/home"])
    })
    .catch(err => {
      console.log("🚀 ~ file: login.page.ts ~ line 35 ~ LoginPage ~ login ~ err", err)
    })
  }

}
