import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RifaService {

  rifasUrl: string;

  constructor(private http: HttpClient) {
    this.rifasUrl = `${environment.apiUrl}/site/rifa`;
  }

  save(id: string): Promise<any> {
    return this.http.get(`${this.rifasUrl}/byId/${id}`)
      .toPromise();
  }


  loadByMainPage(): Promise<any> {
    return this.http.get(`${this.rifasUrl}/byMainPage`)
      .toPromise();
  }

  loadById(id: string): Promise<any> {
    return this.http.get(`${this.rifasUrl}/byId/${id}`)
      .toPromise();
  }

  loadByCodigo(codigo: string): Promise<any> {
    return this.http.get(`${this.rifasUrl}/byCode/${codigo}`)
      .toPromise();
  }

  listar3Ultimas(): Promise<any> {
    return this.http.get(`${this.rifasUrl}/list3`)
      .toPromise();
  }

  listarTodas(): Promise<any> {
    return this.http.get(`${this.rifasUrl}/list`)
      .toPromise();
  }
}
