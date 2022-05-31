import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Usuario} from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(
    private http: HttpClient,
  ) {
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/users`)
      .pipe(
        // @ts-ignore
        map(resp => resp['data'])
      );
  }
}
