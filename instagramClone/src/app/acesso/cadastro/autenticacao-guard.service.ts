import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Autenticacao } from 'src/app/autenticacao.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate {
  constructor(private auteticacao: Autenticacao) { }
  canActivate(): boolean {
    return this.auteticacao.autenticado();
  }
}
