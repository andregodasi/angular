import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Autenticacao {

  constructor(private router: Router) { }

  token_id: string;
  public cadastrarUsuario(usuario: Usuario): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((resp: any) => {
        // remove atributo senha do objeto usuario
        delete usuario.senha;
        firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario);
      })
      .catch(err => console.log(err));
  }

  public autenticar(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((resp: any) => {
        firebase.auth().currentUser.getIdToken()
          .then((idToken: string) => {
            localStorage.setItem('idToken', idToken);
            this.token_id = idToken;
            this.router.navigate(['/home']);
          });
      })
      .catch(err => console.log(err));
  }

  autenticado(): boolean {
    if (this.token_id === undefined && localStorage.getItem('idToken') !== null) {
      this.token_id = localStorage.getItem('idToken');
    }
    if (this.token_id === undefined) {
      this.router.navigate(['/']);
    }
    return this.token_id !== undefined;
  }

  sair(): void {
    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('idToken');
        this.token_id = undefined;
        this.router.navigate(['/']);
      });
  }
}
