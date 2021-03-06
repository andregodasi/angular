import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from 'src/app/bd.service';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {
  form: FormGroup = new FormGroup({
    'titulo': new FormControl(null),

  });
  constructor(private bdService: Bd) { }

  ngOnInit() {
  }

  publicar() {
    this.bdService.publicar();
  }

}
