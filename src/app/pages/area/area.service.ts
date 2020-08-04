import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  public readonly areaURFlux10 = `${environment.areaURFlux10}`;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  getArea(): Observable<any> {
    return this.http.get(`${this.areaURFlux10}`);
  }

  getAreas(): Observable<Area> {
    return this.http.get<Area>(this.areaURFlux10);
  }
}
