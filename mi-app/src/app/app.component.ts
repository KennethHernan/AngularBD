import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { FormComponent } from "./components/partials/form/form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FormComponent]
})
export class AppComponent {
  title = 'mi-app';
}
