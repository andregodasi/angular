import { Http, Response } from '@angular/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { URL_API } from './app.api';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class OfertasService {

  constructor(private http: Http) {

  }


  public getOfertas(): Promise<Array<Oferta>> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((ofertas: any) => ofertas.json())
      .catch(e => console.log(e));
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((ofertas: any) => ofertas.json())
      .catch(e => console.log(e));
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((oferta: any) => oferta.json().shift())
      .catch(e => console.log(e));
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((descricao: any) => descricao.json()[0].descricao)
      .catch(e => console.log(e));
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((descricao: any) => descricao.json()[0].descricao)
      .catch(e => console.log(e));
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`).
      retry(10).
      map((resposta: Response) => resposta.json());

  }

}
