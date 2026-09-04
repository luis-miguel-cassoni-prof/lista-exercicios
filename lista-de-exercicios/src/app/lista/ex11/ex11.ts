import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  nome = '';
  preco = 0;
  quantidade = 0;
  miniToString = '';
  botaoRemover = true;
  exibirTexto = false;

  adicionarAoCarrinho()  {
    this.exibirTexto = true;
  }

  adicionarQtd() {
    this.quantidade++;
    this.botaoRemover = true;
  }

  removerQtd() {
    this.quantidade--
    if(this.quantidade <= 0) {
      this.botaoRemover = false;
    }
  }
}
