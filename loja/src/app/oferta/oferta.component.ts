import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import CarrinhoService from '../carrinho.service';

@Component({
  selector: 'ui-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService, CarrinhoService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    console.log(this.carrinhoService.exibirItens());
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
        .then(oferta => this.oferta = oferta);
    });

    /*  this.route.params.subscribe((parametro: any) => {
      console.log(parametro);
    },
      (erro: any) => console.log(erro),
      () => console.log('Terminou !!!')
    );*/

    /* let tempo = Observable.interval(2000);
    tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    }); */
    /*
        let meuObservable = Observable.create((observer: Observer<number>) => {
          observer.next(3);
          observer.next(4);
          observer.complete();

        });

        meuObservable.subscribe(
          (resultado: any) => console.log(resultado),
          (erro: string) => console.log(erro),
          () => console.log('Stream de eventos terminada')
        ); */
  }

  /* ngOnDestroy(){
    meuIbservable.unSubscribe()
  }
 */
}
