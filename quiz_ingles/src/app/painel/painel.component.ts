import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;
  public instrucao = 'Traduza a frase';
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: Frase;
  public progresso = 0;
  public tentativas = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value;
  }

  public verifcarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      alert('Tradução está correta');
      this.rodada++;
      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
        return;
      }
      this.atualizaRodada();
      this.progresso = this.progresso + (100 / this.frases.length);
    } else {
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
