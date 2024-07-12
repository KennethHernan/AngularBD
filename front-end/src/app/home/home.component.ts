import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: any[] = []

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get("http://localhost:3000/client/users").subscribe( (result: any) => {
      this.users = result.data;
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }
}
