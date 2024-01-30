import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(name: string, pass: string) {
    if (name === 'admin@gmail.com' && pass === 'admin') {
      return 200;
    } else {
      return 403;
    }
  }
}
