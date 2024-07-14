import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.loadPessoas();
  }

  loadPessoas(): void {
    this.pessoaService.getAll().subscribe(pessoas => {
      this.pessoas = pessoas;
    });
  }

  deletePessoa(id: number): void {
    this.pessoaService.delete(id).subscribe(() => {
      this.loadPessoas();
    });
  }
}
