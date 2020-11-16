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
  dataFim: string;
  imagem: string;
  numeros: Array<NumeroRifa>;
}

export class NumeroRifa {
  idRifa: number;
  valor: number;
  status: number;
}

export enum StatusNumeroRifa {
  DISPONIVEL = 1,
  RESERVADO = 2,
  COMPRADO = 3,
}

export class OrdemDeCompra {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  termos: boolean;
  idRifa: number;
  numeros: NumeroRifa[];
  valorTotal: number;
}
