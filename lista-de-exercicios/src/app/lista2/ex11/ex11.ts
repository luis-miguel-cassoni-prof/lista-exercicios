import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  produtos = [
    {id: 1, nome: "Mouse", preco: 200.5, quantidade: 6},
    {id: 2, nome: "Controle", preco: 179.8, quantidade: 4},
    {id: 3, nome: "Monitor", preco: 2000.6, quantidade: 0},
    {id: 4, nome: "Cadeira Gamer", preco: 1200.0, quantidade: 3},
    {id: 5, nome: "PC Gamer Completo", preco: 9000.5, quantidade: 1},
  ]

  mostrar: boolean = true;

  mostrarSemQtd() {
    this.mostrar = !this.mostrar;
  }
}
