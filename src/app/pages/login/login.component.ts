import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/Login/login.service';
import { LoginResponse } from '../../interfaces/login-response';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  _fb = inject(FormBuilder);
  loginService = inject(LoginService);
  response! : LoginResponse;
  router = inject(Router);

  form = this._fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  login() {
    this.loginService
      .login(
        this.form.controls.username.value!,
        this.form.controls.password.value!
      )
      .subscribe({
        next: (res: HttpResponse<LoginResponse>) => {
          this.response = res.body!; 
          this.router.navigate(['home']);
        },
        error: (err) => {
          console.error('Erro ao fazer login:', err);
        }
      });
  }
}
