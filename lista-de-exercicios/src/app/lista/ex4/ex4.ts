import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.scss',
})
export class Ex4 {
  formularioValido = false;
  nome = ''
  mensagem=''

  verificarFormulario() {
    if(this.nome != null) {
      this.formularioValido = true;
    }
  }

  formularioSalvo() {
    this.mensagem = 'Formulário salvo'
  }
}
