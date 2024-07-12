import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) {}

  save(): void {
    if (this.name && this.email && this.password) {
      let bodyData = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      this.http.post("http://localhost:3000/client/create", bodyData).subscribe(
        (result: any) => {
          console.log(result);
          alert(result.message);
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
        }
      );
    } else {
      alert("Por favor, completa todos los campos.");
    }
  }
}
