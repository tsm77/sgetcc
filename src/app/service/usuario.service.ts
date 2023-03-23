import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chave } from '../domain/chave';
import { Usuario } from '../domain/usuario';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  url = `${environment.apiUrl}/usuario`;

  urlUsuario = this.url

  buscarUsuarioPorChave(chave: Chave){
    return this.http.post<Usuario>(`${this.url}/login`, chave);

  }
}
