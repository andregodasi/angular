import { Component, OnInit } from '@angular/core';
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
  public resposta: string;
  public rodada = 0;
  public rodadaFrase: Frase;
  public progresso = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
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
      this.rodadaFrase = this.frases[this.rodada];
      this.progresso = this.progresso + (100 / this.frases.length );
      this.resposta = '';
    } else {
      alert('Tradução está errada');
    }
  }
}
