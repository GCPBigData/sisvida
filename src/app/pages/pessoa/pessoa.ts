import DateTimeFormat = Intl.DateTimeFormat;

export class Pessoa {
  id: string;
  nome: string;
  cpf: string;
  sus: string; // 704.2032.3159.7587
  matricula: string;
  crm: string;
  estado: string;
  cidade: string;
  endereco: string;
  bairro: string;
  cep: string;
  telefone: string;
  email: string;
  status: string;
  profissao: string;
  especialidade: string;
  datanascimento: string;
  sexo: string;
  etinia: string;
  raca: string;
  sangue: string;
  doador: string;
  imagem: string;
  obs: string;
  pai: string;
  mae: string;
  horanascimento: string;
  tipopessoa: string;
  area : [];
  medico: string;
  enfermeiro: string;
  procedimento: string;
  exame: string;
  laudo: string;
  dataCadastro: DateTimeFormat;
}

export class RequestCreateFuncionario{
  nome: string;
  cpf: string;
  matricula: string;
  crm: string;
  estado: string;
  cidade: string;
  endereco: string;
  bairro: string;
  cep: string;
  telefone: string;
  email: string;
  status: string;
  profissao: string;
  especialidade: string;
  dataNascimento: string;
  sexo: string;
  etinia: string;
  raca: string;
  sangue: string;
  doador: string;
  imagem: string;
  obs: string;
  dataCadastro: DateTimeFormat;

}

export class RequestCreatePaciente{
  nome: string;
  cpf: string;
  sus: string; // 704.2032.3159.7587
  estado: string;
  cidade: string;
  endereco: string;
  bairro: string;
  cep: string;
  telefone: string;
  email: string;
  status: string;
  profissao: string;
  dataNascimento: string;
  sexo: string;
  etinia: string;
  raca: string;
  sangue: string;
  doador: string;
  imagem: string;
  obs: string;
  pai: string;
  mae: string;
  horanascimento: string;
  tipopessoa: string;
  area: [];
  medico: string;
  enfermeiro: string;
  procedimento: string;
  exame: string;
  laudo: string;
}
