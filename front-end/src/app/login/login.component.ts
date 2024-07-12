import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';
  messageType: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  save(): void {
    if (this.email && this.password) {
      let bodyData = {
        email: this.email,
        password: this.password,
      };

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.email)) {
        this.message = 'Formato de correo electrónico inválido.';
        this.messageType = 'false';
        return;
      }

      if (this.password.length < 6) {
        this.message = "La contraseña debe tener al menos 6 caracteres.";
        this.messageType = "false";
        return;
      }

      this.http.post('http://localhost:3000/client/login', bodyData).subscribe(
        (result: any) => {
          this.message = result.message;
          this.messageType = result.status;

          if (result.status) {
            this.router.navigateByUrl('/home');
          } else {
            console.log(result.status);
          }
        },
        (error) => {
          console.error('Error al iniciar sesion', error);
        }
      );
    } else {
      this.message = 'Completa los campos';
      this.messageType = 'false';
    }
  }
}
