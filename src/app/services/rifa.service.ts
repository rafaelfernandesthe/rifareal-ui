import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RifaService {

  rifasUrl: string;

  constructor(private http: HttpClient) {
    this.rifasUrl = `${environment.apiUrl}/rifas`;
  }

  load(codigo: string): Promise<any> {
    return this.http.get(`${this.rifasUrl}/load/${codigo}`)
      .toPromise();
  }

  listar3Ultimas(): Promise<any> {
    return this.http.get(`${this.rifasUrl}/ultimas`)
      .toPromise();
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.rifasUrl)
      .toPromise();
  }
}
