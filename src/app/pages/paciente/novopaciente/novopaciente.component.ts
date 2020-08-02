import { Component, OnInit } from '@angular/core';
import { RequestCreatePaciente } from '../../pessoa/pessoa';
import { PessoaService } from '../../pessoa/pessoa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './novopaciente.component.html',
  styleUrls: ['./novopaciente.component.scss']
})
export class NovopacienteComponent implements OnInit {

  showSpinner = false;
  pacienteForm: FormGroup;
  statusString: string[] = ['Inativo' , 'Ativo'];

  request: RequestCreatePaciente = {
  nome: '',
  cpf: '',
  sus: '',
  estado: '',
  cidade: '',
  endereco: '',
  bairro: '',
  cep: '',
  telefone: '',
  email: '',
  status: 'Ativo',
  profissao: '',
  dataNascimento: '',
  sexo: '',
  etinia: '',
  raca: '',
  sangue: '',
  doador: '',
  imagem: '',
  obs: ''
  }

  constructor(
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder,
) {
}

  ngOnInit(): void {
    this.gerarForm();
  }

    // TODO: usado para gerar reconhecimento do combo
    gerarForm() {
      this.pacienteForm = this.formBuilder.group({
        nome: [null, [ Validators.required ]],
        cpf: [null, [ Validators.required ]],
        sus: [null],
        estado: [null],
        cidade: [null],
        endereco: [null],
        bairro: [null],
        cep: [null],
        telefone: [null],
        email: [null],
        status: ["Ativo"],
        profissao: [null],
        dataNascimento: [null],
        sexo: [null],
        etinia: [null],
        raca: [null],
        sangue: [null],
        doador: [null],
        imagem: [null],
        obs: ''
        });
  }

  save() {
    this.pessoaService.createPaciente(this.request)
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
    this.pacienteForm.reset();
}
}
