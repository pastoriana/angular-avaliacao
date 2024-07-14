import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoaService.getAll().subscribe((data: Pessoa[]) => {
      this.pessoas = data;
    });
  }

  deletePessoa(id: string): void {
    this.pessoaService.delete(id).subscribe(() => {
      this.pessoas = this.pessoas.filter(pessoa => pessoa.id !== id);
    });
  }
}
