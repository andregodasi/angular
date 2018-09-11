import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

@Injectable()
class CarrinhoService {
  public itens = new Array<ItemCarrinho>();

  constructor() { }

  exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  incluirItem(oferta: Oferta): void {
    const itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1);
    const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }


  }

  public totalCarrinhoCompras(): number {
    let total = 0;

    this.itens.map((item: ItemCarrinho) => {
      total += (item.valor * item.quantidade);
    });
    return total;
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  public removerQuantidade(itemCarrinho: ItemCarrinho): void {
    const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1;
      if (itemCarrinho.quantidade === 0) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);

      }
    }
  }
}

export { CarrinhoService };
