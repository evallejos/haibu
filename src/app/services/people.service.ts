import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import PATH from '../config/path';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  public getPeople() {
    return this.http.get(`${PATH.URL_BASE}prueba-tecnica-sf/user`);
  }
}
