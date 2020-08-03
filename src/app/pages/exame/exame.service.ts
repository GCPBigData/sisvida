import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exame, RequestCreateExame } from './exame';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  public readonly exameURFlux20 = `${environment.exameURFlux20}`;
  public readonly exameURLInsert = `${environment.exameURLInsert}`;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  getExames(): Observable<any> {
    return this.http.get(`${this.exameURFlux20}`);
  }

  createExame(request: RequestCreateExame): Observable<Exame> {
    return this.http.post<Exame>(this.exameURLInsert, request);
  }
}
