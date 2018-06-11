import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ui-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario') f: NgForm;
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
      console.log(this.f);
      const pedido = new Pedido(
        this.f.value.endereco,
        this.f.value.numero,
        this.f.value.complemento,
        this.f.value.formaPagamento
      );
    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
        console.log(`Pedido cadastrado com sucesso! ID cadastrado ${idPedido}`);
      });
  }

}
