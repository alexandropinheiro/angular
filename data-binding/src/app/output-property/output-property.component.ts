import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  mudouValor = new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit();
  }

  decrementa(){
    this.valor--;
  }

  constructor() { }

  ngOnInit() {
  }

}
