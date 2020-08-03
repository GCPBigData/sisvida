import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { PessoaService } from '../pessoa/pessoa.service';
import { Pessoa } from '../pessoa/pessoa';

@Component({
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  showSpinner = false;
  results$;
  responsePaciente: Pessoa;
  paciente$: Observable<Pessoa>;
  queryField = new FormControl();
  texto = '';

  staticAlertClosed  = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed7 = false;

  public modalFireCondition = false;
  public isSwalVisible = false;

  mudaTermo() {
    this.texto = this.queryField.value;
  }
  constructor(
    private router: Router,
    private pessoaService: PessoaService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.reloadData();
 }

  reloadData() {
    this.paciente$ = this.pessoaService.getPaciente();
    this.showNotification(`bottom`, `left`);
    this.showSpinner = true;
    this.pessoaService.getPaciente().subscribe(
      results$ => this.responsePaciente = results$
    );
    if (this.results$ == null) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 1000);
    }
  }

  showNotification(from, align){

    const color = Math.floor((Math.random() * 5) + 1);

    switch(color){
      case 1:
        this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-info alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      case 2:
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      case 3:
        this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-warning alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      case 4:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      case 5:
        this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-primary alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
        break;
      default:
        break;
    }
  }
}
