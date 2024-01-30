import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.css',
})
export class SingleMovieComponent implements OnInit {
  type = '';
  id = '';
  singleUser: any;
  users: any;
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id, 'id');
    this.getUser();
  }

  backToMovies() {
    this.router.navigate(['movies']);
  }

  getUser() {
    console.log('go to user')

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((value) => {
        this.users = value;
        let index = this.users.findIndex(
          (user: { id: string }) => user.id == this.id
        );
        console.log(index, 'index');

        this.singleUser = this.users[index];
      });
  }
}
