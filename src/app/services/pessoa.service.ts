import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  createPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  getPessoaById(id: string): Observable<Pessoa> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pessoa>(url);
  }

  updatePessoa(id: string, pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Pessoa>(url, pessoa);
  }

  deletePessoa(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
