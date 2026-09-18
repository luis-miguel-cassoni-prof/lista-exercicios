import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.scss',
})
export class Ex4 {
  item: string = '';
  estoque: number = 0;
  itemSalvo: string = '';

  salvarItem() {
    this.itemSalvo = this.item;
  }

  addUnidade() {
    this.estoque++;
  }

  removerUnidade() {
    this.estoque--;
  }
}
