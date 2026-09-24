import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  produtos = [
    {id: 1, nome: "Mouse", preco: 200.5, quantidade: 6, promocao: false},
    {id: 2, nome: "Controle", preco: 179.8, quantidade: 4, promocao: false},
    {id: 3, nome: "Monitor", preco: 2000.6, quantidade: 0, promocao: false},
    {id: 4, nome: "Cadeira Gamer", preco: 1200.0, quantidade: 3, promocao: false},
    {id: 5, nome: "PC Gamer Completo", preco: 9000.5, quantidade: 1, promocao: false},
  ]

  aplicarPromocao(index: number) {
    this.produtos[index].promocao = !this.produtos[index].promocao;
  }

}
