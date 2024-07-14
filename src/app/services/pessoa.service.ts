import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'http://localhost:3000/db.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  getById(id: string): Observable<Pessoa> {
    const numericId = +id; // Converte a string para número usando +
    const url = `${this.apiUrl}/${numericId}`;
    return this.http.get<Pessoa>(url);
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  update(id: number, pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Pessoa>(url, pessoa);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
