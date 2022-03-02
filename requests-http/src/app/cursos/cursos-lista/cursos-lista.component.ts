import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';
import { catchError, EMPTY, Observable, Subject, switchMap, take } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})

export class CursosListaComponent implements OnInit {

  // bsModalRef: BsModalRef;

  // cursos: Curso[];

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  cursoSelecionado: Curso;

  constructor(private service: CursosService,
    private modalService: BsModalService,
    //private modalService: BsModalService
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        // map(), tap(), switchMap(),
        catchError(error => {
          console.error(error);
          // this.error$.next(true)
          this.handleError();
          return EMPTY;
        })
      );
    // this.service.list()
    //   .pipe(
    //     catchError(error => empty())
    //   )
    //   .subscribe(
    //     dados => {
    //       console.log(dados);
    //     }
        // , error => console.error(error),
        // () => console.log('Observable completo!')
      // )
  }

  handleError() {
     this.alertService.showAlertDanger("Erro ao carregar cursos. Tente novamente mais tarde.");
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

  onEdit(id: any){
    this.router.navigate(['editar', id], {relativeTo: this.route})
  }

  onDelete(curso:any){
    this.cursoSelecionado = curso;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse curso?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(curso.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
      }
    );
  }

  onConfirmDelete() {
    this.service.remove(this.cursoSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
