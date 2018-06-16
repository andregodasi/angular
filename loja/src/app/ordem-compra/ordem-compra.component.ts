import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import CarrinhoService from '../carrinho.service';

@Component({
  selector: 'ui-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService, CarrinhoService]
})
export class OrdemCompraComponent implements OnInit {
  idPedidoCompra = undefined;
  formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  });
  constructor(private ordemCompraService: OrdemCompraService,
              private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    console.log(this.carrinhoService.exibirItens());
  }

  confirmarCompra(): void {
    console.log(this.formulario.status);
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco').markAsUntouched();
      this.formulario.get('numero').markAsUntouched();
      this.formulario.get('complemento').markAsUntouched();
      this.formulario.get('formaPagamento').markAsUntouched();
    } else {
      const pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.complemento
      );
      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => this.idPedidoCompra = idPedido);

      console.log(this.formulario.status);
    }
  }

}
