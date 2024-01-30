import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  http = inject(HttpClient);
  router = inject(Router);
  users: any;
  user: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((value) => {
        this.users = value;
      });
  }

  goToUser(type: string, id: string) {
    this.router.navigate(['movie', id]);
  }
}
