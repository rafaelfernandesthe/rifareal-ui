export class Rifa {
  id: number;
  status: string;
  codigo: string;
  descricao: string;
  valor: number;
  diasTotal: number;
  diasRestantes: number;
  rifasTotal: number;
  rifasRestantes: number;
  dataInclusao: Date;
  dataInicio: Date;
  dataFim: Date;
  dataFimStr: string;
  imagem: string;
  numeros: Array<NumeroRifa>;
}

export class NumeroRifa {
  id: number;
  idRifa: number;
  valor: number;
  status: string;
  statusNum: number;
}

export enum StatusNumeroRifa {
  DISPONIVEL = 1,
  RESERVADO = 2,
  COMPRADO = 3,
}

export class OrdemDeCompra {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  termos: boolean;
  idRifa: number;
  numerosObj: NumeroRifa[];
  idNumeros: number[];
  valorTotal: number;
}
