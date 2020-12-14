import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdemDeCompra } from '../core/model';


@Injectable()
export class AssinarNoticiasService {

  assinarNoticiasUrl: string;

  constructor(private http: HttpClient) {
    this.assinarNoticiasUrl = `${environment.apiUrl}/site/assinar-noticias`;
  }

  save(email: string): Promise<any> {
    return this.http.post(this.assinarNoticiasUrl, email)
      .toPromise();
  }

}
