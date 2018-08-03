import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  teste:string;
  valor:number;

  constructor() {
    this.teste = "Testando...";
    this.valor = 30;
   }

  ngOnInit() {
  }

}
