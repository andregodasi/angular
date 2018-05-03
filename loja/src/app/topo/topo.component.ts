import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';
import '../util/rxjs-extensions';


@Component({
  selector: 'ui-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  ofertas: Observable<Oferta[]>;
  ofertas2: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.
      debounceTime(1000).
      distinctUntilChanged().
      switchMap((termo: string) => {
        if (termo.trim() === '') {
          return Observable.of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }).catch((erro: any) => {
        console.log(erro);
        return Observable.of<Oferta[]>([]);
      });

    this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertas2 = ofertas);
  }

  pesquisa(termo: string): void {
    this.subjectPesquisa.next(termo);
  }

}
