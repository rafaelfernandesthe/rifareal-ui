import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdemDeCompra } from '../core/model';


@Injectable()
export class NumeroRifaService {

  numeroRifaUrl: string;

  constructor(private http: HttpClient) {
    this.numeroRifaUrl = `${environment.apiUrl}/site/numero-rifa`;
  }

  loadById(id: number): Promise<any> {
    return this.http.get(`${this.numeroRifaUrl}/byId/${id}`)
      .toPromise();
  }

}
