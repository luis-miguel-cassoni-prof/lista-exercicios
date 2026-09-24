import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss',
})
export class Ex8 {
  produtos = [
    {id: 1, nome: "Mouse", preco: 200.5, quantidade: 6},
    {id: 2, nome: "Controle", preco: 179.8, quantidade: 4},
    {id: 3, nome: "Monitor", preco: 2000.6, quantidade: 2},
    {id: 4, nome: "Cadeira Gamer", preco: 1200.0, quantidade: 3},
    {id: 5, nome: "PC Gamer Completo", preco: 9000.5, quantidade: 1},
  ]
}
