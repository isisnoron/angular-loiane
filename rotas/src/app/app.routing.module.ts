import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from "@angular/material/form-field";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},  
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }

];

@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes),
        MatFormFieldModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }