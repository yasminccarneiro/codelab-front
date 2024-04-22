import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TesteModule } from './teste/teste.module';
import { CommonModule } from '@angular/common';
import { TestComponentRenderer } from '@angular/core/testing';
import { TesteComponent } from './teste/teste.component';

@Component({
  selector: 'cl-root',
  standalone: true,
  imports: [CommonModule, TesteModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  nome = 'Henrique';

  condition = true;

  nomeComponentePai = 'Code Lab';

  @ViewChild(TesteComponent) testeComponent!: TesteComponent;

  printaNome() {
    console.log(this.nome);
    console.log("teste")
  }

  ngOnInit(): void {
    console.log(this.testeComponent);
  }
  ngAfterViewInit(): void {

  }

}
