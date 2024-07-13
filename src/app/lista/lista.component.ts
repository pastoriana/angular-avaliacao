import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  people: any[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.getAll().subscribe(data => {
      this.people = data;
    });
  }

  deletePerson(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.pessoaService.delete(id).subscribe(() => {
        this.people = this.people.filter(person => person.id !== id);
      });
    }
  }
}
