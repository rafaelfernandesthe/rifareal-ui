import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdemDeCompra } from '../core/model';


@Injectable()
export class OrdemDeCompraService {

  ordemDeCompraUrl: string;

  constructor(private http: HttpClient) {
    this.ordemDeCompraUrl = `${environment.apiUrl}/site/ordem-de-compra`;
  }

  save(ordemDeCompra: OrdemDeCompra): Promise<any> {
    return this.http.post(`${this.ordemDeCompraUrl}/saveNew`, ordemDeCompra)
      .toPromise();
  }

}
