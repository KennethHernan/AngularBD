import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  email: string = "";
  password: string = "";
  message: string = "";
  messageType: string = "";

  constructor(private router: Router, private http: HttpClient) {}

  save(): void {
    if (this.name && this.email && this.password) {
      let bodyData = {
        name: this.name,
        email: this.email,
        password: this.password
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

      if (this.name.length < 6) {
        this.message = "El nombre debe tener al menos 6 caracteres.";
        this.messageType = "false";
        return;
      }

      this.http.post<any>("http://localhost:3000/client/create", bodyData).subscribe( (resultData: any) => {
          console.log(resultData);

          this.message = resultData.message;
          this.messageType = resultData.status;

          if(resultData.status){
            this.router.navigateByUrl('/login');
          }else{
            console.log(resultData.status);
          }
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
        }
      );
    } else {
      this.message = "Completa los campos";
      this.messageType = "false";
    }
  }
}
