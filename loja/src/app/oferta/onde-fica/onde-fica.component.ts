import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'ui-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      console.log(this.route.parent.snapshot.params['id']);
      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
        .then((resposta: string) => this.ondeFica = resposta);
    });
  }

}
