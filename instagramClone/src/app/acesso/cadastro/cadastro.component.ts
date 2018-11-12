import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() exibirPainel: EventEmitter<string> = new EventEmitter<string>();
  formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null),
  });
  constructor() { }

  ngOnInit() {
  }

  exibirPainelLogin() {
    this.exibirPainel.emit('login');
  }

  cadastrarUsuario() {
    const usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_comple,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    );
  }

}
