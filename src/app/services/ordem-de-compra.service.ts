import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdemDeCompra } from '../core/model';


@Injectable()
export class OrdemDeCompraService {

  ordemDeCompraUrl: string;
  ordemDeCompraUrlAdmin: string;

  constructor(private http: HttpClient) {
    this.ordemDeCompraUrl = `${environment.apiUrl}/site/ordem-de-compra`;
    this.ordemDeCompraUrlAdmin = `${environment.apiUrl}/admin/ordem-de-compra`;
  }

  save(ordemDeCompra: OrdemDeCompra): Promise<any> {
    return this.http.post(`${this.ordemDeCompraUrl}/saveNew`, ordemDeCompra)
      .toPromise();
  }

  findByRifa(idRifa: number): Promise<any> {
    return this.http.get(`${this.ordemDeCompraUrlAdmin}/findByRifa/${idRifa}`)
      .toPromise();
  }

  savePay(ordemDeCompra: OrdemDeCompra): Promise<any> {
    return this.http.post(`${this.ordemDeCompraUrlAdmin}/savePay`, ordemDeCompra)
      .toPromise();
  }

}
