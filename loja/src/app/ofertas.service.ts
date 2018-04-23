import { Http } from '@angular/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

  constructor(private http: Http) {

  }


  public getOfertas(): Promise<Array<Oferta>> {
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((ofertas: any) => ofertas.json())
      .catch(e => console.log(e));
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((ofertas: any) => ofertas.json())
      .catch(e => console.log(e));
  }

}
