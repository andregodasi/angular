import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'ui-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  pedido = new Pedido('', '', '', '');
  endereco = '';
  numero: number;
  complemento = '';
  formaPagamento = '';

  public idPedidoCompra: number;
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  confirmarCompra(): void {
    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
  }

}
