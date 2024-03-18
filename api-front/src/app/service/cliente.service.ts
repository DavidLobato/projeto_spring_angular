import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //url api 
  private url: string = 'http://localhost:8080';

  //construtor
  constructor(private http: HttpClient) { }

  //metodo para selecionar todos os clientes
  selecionar(): Observable<Cliente[]> { return this.http.get<Cliente[]>(this.url); }

  cadastrar(obj: Cliente): Observable<Cliente> { return this.http.post<Cliente>(this.url, obj) }
  editar(obj: Cliente): Observable<Cliente> { return this.http.put<Cliente>(this.url, obj) }
  excluir(codigo:number):Observable<void>{return this.http.delete<void>(this.url+'/'+codigo)} 
}
