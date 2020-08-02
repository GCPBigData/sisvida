import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExameService } from '../exame.service';
import { RequestCreateExame } from '../exame';

@Component({
  templateUrl: './novoexame.component.html',
  styleUrls: ['./novoexame.component.scss']
})
export class NovoexameComponent implements OnInit {

  showSpinner = false;
  exameForm: FormGroup;
  //sectores$: Observable<Sector[]>;
  statusString: string[] = ['INATIVO' , 'ATIVO'];

  // TODO: usado para salvar
  request: RequestCreateExame = {
    id: '',
    uid: '',
    areahospital: '',
    imagens: '',
    paciente: '',
    medico: '',
    funcionario: '',
    modalidade: '',
    procedimento: '',
    laudo: '',
    notamedico: '',
    audio: '',
    status: '',
    prioridade: '',
    maquina: '',
    dataCadastro: null,
    dataTermino: null

  }
     constructor(
              private exameService: ExameService,
              private formBuilder: FormBuilder,
  ) {
  }

  // TODO: usado para gerar reconhecimento do combo
  gerarForm() {
      this.exameForm = this.formBuilder.group({
          uid: [null, [ Validators.required ]],
          areahospital: [null],
          imagens: [null],
          paciente: [null],
          medico: [null],
          funcionario: [null],
          modalidade: [null],
          procedimento: [null],
          laudo: [null],
          notamedico: [null],
          audio: [null],
          status: [null],
          prioridade: [null],
          maquina: [null],
          dataTermino: [null],
          dataCadastro: [null]
        });
  }

  ngOnInit() {
      this.gerarForm();
      //this.showSpinner = true;
      // TODO: Combo para Sector
      //this.sectores$ = this.sectorService.getSector();
  }

  save() {
      this.exameService.createExame(this.request)
          .subscribe(
              data => {
                  //this.showNotificationSucesso();
                  this.limpa();
              },
              err => {
                  //this.showNotificationErro();
              })
  }

  limpa() {
      this.exameForm.reset();
  }
}
