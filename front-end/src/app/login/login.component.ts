import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) {}

  save(): void {
    if (this.email && this.password) {
      let bodyData = {
        email: this.email,
        password: this.password
      };

      this.http.post("http://localhost:3000/client/login", bodyData).subscribe(
        (result: any) => {
          console.log(result);
          alert(result.message);
        },
        (error) => {
          console.error('Error al iniiciar sesion', error);
        }
      );
    } else {
      alert("Por favor, completa todos los campos.");
    }
  }
}
