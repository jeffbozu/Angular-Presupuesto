import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes//
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch:'full'}, /*si esta vacio '', nos redirige a ingresar presupesto*/
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  {path:'**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'}, /* es importante que este de ultimo, si escribimos mal '**'nos redirige a ingresarpresupuesto*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
