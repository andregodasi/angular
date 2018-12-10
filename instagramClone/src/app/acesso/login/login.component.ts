import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() exibirPainel: EventEmitter<string> = new EventEmitter<string>();
  formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  });
  constructor(private autenticao: Autenticacao) { }

  ngOnInit() { }

  exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro');
  }

  autenticar() {
    this.autenticao.autenticar(this.formulario.value.email, this.formulario.value.senha);
  }

}
