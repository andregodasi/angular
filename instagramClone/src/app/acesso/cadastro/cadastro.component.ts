import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() exibirPainel: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  exibirPainelLogin() {
    this.exibirPainel.emit('login');
  }

}
