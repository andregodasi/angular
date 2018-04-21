import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento = true;
  public tipoEncerramento: string;
  public encerrarJogo(texto: string) {
    this.tipoEncerramento = texto;
    this.jogoEmAndamento = false;
  }

  public reiniciarJogo() {
    this.jogoEmAndamento = true;
  }
}
