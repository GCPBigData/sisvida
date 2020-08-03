import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { RequestCreatePaciente } from '../../pessoa/pessoa';
import { PessoaService } from '../../pessoa/pessoa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './novopaciente.component.html',
  styleUrls: ['./novopaciente.component.scss']
})
export class NovopacienteComponent implements OnInit {

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  videoWidth = 0;
  videoHeight = 0;
  constraints = {
    video: {
      facingMode: 'environment',
      width: { ideal: 4096 },
      height: { ideal: 2160 }
    }
  };

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
    private renderer: Renderer2
) {
}

  ngOnInit(): void {
    this.gerarForm();
    this.startCamera();
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
        status: ['Ativo'],
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

  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
      alert('Sorry, camera not available.');
    }
  }

  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }

  capture() {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
  }

  handleError(error) {
    console.log('Error: ', error);
  }

}
