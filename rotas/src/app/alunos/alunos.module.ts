import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';



@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent, 
        AlunoDetalheComponent
    ],
    providers: [AlunosService],
})
export class AlunosModule { }
