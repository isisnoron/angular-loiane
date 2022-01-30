import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosComponent } from "./alunos.component";
//import { CanActivateChild } from "@angular/router";
import { AlunosGuard } from "../guards/alunos.guard";

const alunosRoutes: any = [
    {
        path: '', component: AlunosComponent, 
        canActivateChild: [AlunosGuard ],
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormComponent }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule { }