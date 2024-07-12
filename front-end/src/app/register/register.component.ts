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
