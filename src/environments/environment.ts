export const environment = {
  production: true,
  /*PACIENTE   φ = '1,61803398874988'; */
  pessoaURFlux10: 'http://191.252.204.57:8080/pessoa/flux20',
  pacienteURLInsert: 'http://191.252.204.57:8080/pessoa/paciente/post',

  /*EXAME   φ = '1,61803398874988'; */
  exameURFlux20: 'http://191.252.204.57:8080/exame/flux20',
  exameURLInsert: 'http://191.252.204.57:8080/exame/post',

  /*CLIENTE FISICA   φ = '1,61803398874988'; */
  clienteFlisicaURLInsert: 'http://191.252.204.57/api/v1/clientefisica/todos',
  clienteFlisicaURLListarTodos: 'http://191.252.204.57:8080/api/v1/clientefisica/todos',
  clienteFlisicaURLpainel: 'http://191.252.204.57/api/v1/clientefisica/listaFiltroFull/',
  clienteFlisicaURLfindNome: 'http://177.47.18.202/zuul/brokerages/brokerages/findbynome/',
  clienteFlisicaURLfindId: 'http://177.47.18.202/zuul/brokerages/brokerages/findbyid',
  clienteFlisicaURLfindAccount: 'http://177.47.18.202/zuul/brokerages/brokerages/findaccountsbyuser/',
  clienteFlisicaURLPut: 'http://177.47.18.202/zuul/brokerages/brokerages/editar/',
  clienteFlisicaURLPutUpdate: 'http://177.47.18.202/zuul/brokerages/brokerages/update/',
  clienteFlisicaURLDelete: 'http://177.47.18.202/zuul/brokerages/brokerages/delete/',
  clienteFlisicaURLStatus: 'http://177.47.18.202/zuul/brokerages/brokerages/status/check/',

  /*COMPANY*/
  companyURListAll: 'http://177.47.18.202/zuul/empresa/company/allResult/',
  companyURLfindName: 'http://177.47.18.202/zuul/empresa/company/findbyname/',
  companyURLfindId: 'http://177.47.18.202/zuul/empresa/company/findbyid/',
  companyURLInsert: 'http://177.47.18.202/zuul/empresa/company/insert',
  companyURLPut: 'http://177.47.18.202/zuul/empresa/company/edit/',
  companyURLPutStatus: 'http://177.47.18.202/zuul/empresa/company/edit/',
  companyURListAllSector: 'http://177.47.18.202/zuul/empresa/company/allResultSector/',
  /*WALLET*/
  walletURListAll: 'http://177.47.18.202/zuul/wallet/wallet/all',
  walletURLfindName: 'http://177.47.18.202/zuul/wallet/wallet/findbyname/',
  walletURLfindId: 'http://177.47.18.202/zuul/wallet/wallet/findbyid/',
  walletURLInsert: 'http://177.47.18.202/zuul/wallet/wallet/insert/',
  walletURLPut: 'http://177.47.18.202/zuul/wallet/wallet/edit/',
  /*LOGIN*/
  walletURlPost: 'http://177.47.18.202/zuul/users/users/login/',
  apiUrl: 'http://177.47.18.202/zuul/users/users/login/',
  /*EMOLUMENTOS*/
  emolumentosURListAll: 'http://177.47.18.202/zuul/emolumentos/emolumentos/all',
  emolumentosURLfindName: 'http://177.47.18.202/zuul/emolumentos/emolumentos/findbyname/',
  emolumentosURLfindId: 'http://177.47.18.202/zuul/emolumentos/emolumentos/findbyid/',
  emolumentosURLInsert: 'http://177.47.18.202/zuul/emolumentos/emolumentos/insert/',
  emolumentosURLPut: 'http://177.47.18.202/zuul/emolumentos/emolumentos/edit/',
  /*EMOLUMENTOS*/
  acoesURListAll: 'http://177.47.18.202/zuul/acoes/acoes/all',
  acoesURLfindName: 'http://177.47.18.202/zuul/acoes/acoes/findbyname/',
  acoesURLfindId: 'http://177.47.18.202/zuul/acoes/acoes/findbyid/',
  acoesURLInsert: 'http://177.47.18.202/zuul/acoes/acoes/insert/',
  acoesURLPut: 'http://177.47.18.202/zuul/acoes/acoes/edit/',
};
