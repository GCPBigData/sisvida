/*import DateTimeFormat = Intl.DateTimeFormat;*/
export class Exame {
  id: string;
  uid: string;
  areahospital: [];
  imagens: string;
  paciente: [];
  medico: [];
  funcionario: [];
  modalidade: string;
  procedimento: string;
  laudo: [];
  notamedico: string;
  audio: string;
  status: string;
  prioridade: string;
  maquina: string;
  datacadastro: string;
  datatermino: string;
}

export interface RequestCreateExame {
  id: string;
  uid: string;
  areahospital: string;
  imagens: string;
  paciente: string;
  medico: string;
  funcionario: string;
  modalidade: string;
  procedimento: string;
  laudo: string;
  notamedico: string;
  audio: string;
  status: string;
  prioridade: string;
  maquina: string;
  dataCadastro: string;
  dataTermino: string;
}
