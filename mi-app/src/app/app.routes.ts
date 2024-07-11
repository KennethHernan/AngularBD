import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

export const routes: Routes = [
  { path: '', component: ListarUsuarioComponent },
  { path: 'crear-usuario', component:CrearUsuarioComponent },
  { path: 'crear-usuario', component:CrearUsuarioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
