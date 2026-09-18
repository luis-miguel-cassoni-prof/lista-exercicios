import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  nomes: string[] = ["Lucas", "Roberto", "Gilba", "Luan", "Tiago", "Oliver"];

  removerUltimo() {
    this.nomes.splice((this.nomes.length - 1), 1);
  }

  removerTodos() {
    for(let i = 0; i < this.nomes.length; i++) {
      this.nomes.splice(0, this.nomes.length);
    }
  }
}
