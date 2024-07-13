import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  pessoaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router
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

  onSubmit(): void {
    if (this.pessoaForm.valid) {
      this.pessoaService.create(this.pessoaForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
