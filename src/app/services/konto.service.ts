import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Konto } from '../models/konto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KontoService {

  constructor(private httpClient: HttpClient) {}

  public getAllKontos(): Observable<Konto[]> {
    return this.httpClient.get<Konto[]>(environment.API_URL + 'konto');
  }

  public getKonto(id: number): Observable<Konto> {
    return this.httpClient.get<Konto>(environment.API_URL + 'konto/' + id);
  }

  public insertKonto(konto: Konto): Observable<Object> {
    return this.httpClient.post(environment.API_URL + 'konto/', konto);
  }

  public updateKonto(konto: Konto): Observable<Object> {
    return this.httpClient.put(environment.API_URL + 'konto/' + konto.id, konto);
  }

  public deleteKonto(id: number): Observable<Object> {
    return this.httpClient.delete(environment.API_URL + 'konto/' + id);
  }
}
