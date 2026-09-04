import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  nome = ''
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
