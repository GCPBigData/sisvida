import DateTimeFormat = Intl.DateTimeFormat;
export class Exame {
  id: String;
  uid: String;
  areahospital: String;
  imagens: String;
  paciente: String;
  medico: String;
  funcionario: String;
  modalidade: String;
  procedimento: String;
  laudo: String;
  notamedico: String;
  audio: String;
  status: String;
  prioridade: String;
  maquina: String;
  dataCadastro: DateTimeFormat;
  dataTermino: DateTimeFormat;
}

export class RequestCreateExame {
  id: String;
  uid: String;
  areahospital: String;
  imagens: String;
  paciente: String;
  medico: String;
  funcionario: String;
  modalidade: String;
  procedimento: String;
  laudo: String;
  notamedico: String;
  audio: String;
  status: String;
  prioridade: String;
  maquina: String;
  dataCadastro: DateTimeFormat;
  dataTermino: DateTimeFormat;
}
