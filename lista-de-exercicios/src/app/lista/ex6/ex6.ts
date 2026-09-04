import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  quantidade = 0;
  mensagemErro = '';
  botaoRemover = true;

  adicionarQtd() {
    this.quantidade++
    this.mensagemErro = ''
    this.botaoRemover = true;
  }

  removerQtd() {
    if(this.quantidade > 0) {
      this.quantidade--;
    } else {
      this.mensagemErro = 'Erro, já não existem produtos para serem removidos';
      this.botaoRemover = false;
    }
  }
}
