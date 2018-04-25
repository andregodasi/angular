import { Http } from '@angular/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {

  constructor(private http: Http) {

  }


  public getOfertas(): Promise<Array<Oferta>> {
    return this.http.get(`${URL_API}?destaque=true`)
      .toPromise()
      .then((ofertas: any) => ofertas.json())
      .catch(e => console.log(e));
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
    return this.http.get(`${URL_API}?categoria=${categoria}`)
      .toPromise()
      .then((ofertas: any) => ofertas.json())
      .catch(e => console.log(e));
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}?id=${id}`)
      .toPromise()
      .then((oferta: any) => oferta.json().shift())
      .catch(e => console.log(e));
  }

}
