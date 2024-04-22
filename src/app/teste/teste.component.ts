import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cl-teste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss'
})
export class TesteComponent implements OnChanges, OnInit, DoCheck{
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
   console.log("Componente inciado");
   console.log(document.querySelector('p'))
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  @Input() nomeComponenteFilho = 'nome componente filho';
}
