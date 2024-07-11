import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {
  usersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usersForm = this.fb.group({
     name: ['',Validators.required],
     phone: ['',Validators.required],
     email: ['',[Validators.required, Validators.email]],
     password: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addUsers() {
    console.log(this.usersForm.value);
    console.log(this.usersForm.value); 
  }
}
