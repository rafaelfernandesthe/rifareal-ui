import { Rifa } from './../core/model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RifaService {

  rifasUrl: string;
  rifasUrlAdmin: string;

  constructor(private http: HttpClient) {
    this.rifasUrl = `${environment.apiUrl}/site/rifa`;
    this.rifasUrlAdmin = `${environment.apiUrl}/admin/rifa`;
  }

  postAnexo(file: any): Promise<any> {
    const formData: FormData = new FormData();
    formData.append('anexo', file, file.name);
    return this.http.post<any>(`${this.rifasUrlAdmin}/anexo`, formData)
      .toPromise();
  }

  save(rifa: Rifa): Promise<any> {
    return this.http.post(`${this.rifasUrlAdmin}/saveNew`, rifa)
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
