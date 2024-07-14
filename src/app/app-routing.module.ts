import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'editar/:id', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
