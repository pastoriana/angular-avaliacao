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
      name: ['', Validators.required],
      role: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      isActive: [false],
      country: [''],
      experience: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pessoaId = params.get('id')!;
      this.pessoaService.getPessoaById(this.pessoaId).subscribe((pessoa: Pessoa) => {
        this.pessoaForm.patchValue(pessoa);
      });
    });
  }

  onSubmit(): void {
    if (this.pessoaForm.valid) {
      this.pessoaService.updatePessoa(this.pessoaId, this.pessoaForm.value).subscribe(() => {
        this.router.navigate(['/persons']);
      });
    }
  }
}
