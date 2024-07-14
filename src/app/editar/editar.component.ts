import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  pessoaForm: FormGroup;
  pessoaId!: string;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pessoaForm = this.fb.group({
      nome: ['', Validators.required],
      perfil: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      ativo: [false],
      pais: [''],
      experiencia: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pessoaId = params.get('id')!;
      this.pessoaService.getById(this.pessoaId).subscribe((pessoa: Pessoa) => {
        this.pessoaForm.patchValue(pessoa);
      });
    });
  }

  onSubmit(): void {
    if (this.pessoaForm.valid) {
      this.pessoaService.update(this.pessoaId, this.pessoaForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
