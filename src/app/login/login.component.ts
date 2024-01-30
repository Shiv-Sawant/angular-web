import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  Username = '';
  Password = '';
  errorMsg = '';
  auth = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {}

  submitModel() {
    if (
      this.Username.trim().length !== 0 &&
      this.Password.trim().length !== 0
    ) {
      let res = this.auth.login(this.Username, this.Password);
      if (res === 403) {
        this.errorMsg = 'invalid credentials';
        return;
      }
      this.router.navigate(['home']);
    } else {
      this.errorMsg = 'required all fields';
    }
  }
}
