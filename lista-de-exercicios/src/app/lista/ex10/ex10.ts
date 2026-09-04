import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  usuario = '';
  senha = '';
  validarAut = false;
}

validarAutenticacao() {
  if(this.nome != null && this.senha != null) {
    validarAut = true;
  }

  if(validarAut)
}
