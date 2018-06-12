import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ui-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  });
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  confirmarCompra(): void {
    console.log(this.formulario);
  }

}
