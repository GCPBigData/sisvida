import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa, RequestCreatePaciente } from './pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  public readonly pessoaURFlux10 = `${environment.pessoaURFlux10}`;
  public readonly funcionarioURFlux10 = `${environment.funcionarioURFlux10}`;
  public readonly pacienteURFlux10 = `${environment.pacienteURFlux10}`;
  public readonly pacienteURLInsert = `${environment.pacienteURLInsert}`;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  getPaciente(): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.pacienteURFlux10);
  }
  getFuncionario(): Observable<any> {
    return this.http.get(`${this.funcionarioURFlux10}`);
  }
  createPaciente(request: RequestCreatePaciente): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.pacienteURLInsert, request);
  }
}
