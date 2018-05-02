import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ui-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.
      switchMap((termo: string) => {
        return this.ofertasService.pesquisaOfertas(termo);
      });

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  pesquisa(termo: string): void {
    this.subjectPesquisa.next(termo);
  }

}
