import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model';

@Injectable()
class CarrinhoService {
  public itens = new Array<ItemCarrinho>();

  constructor() { }

  exibirItens(): ItemCarrinho[]{
    return this.itens;
  }

}

export default CarrinhoService;
