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
  loginRealizado = '';
  
  verificarEntrada() {
    if(this.usuario != '' && this.senha != '') {
      this.validarAut = true;
    }
  }

  botaoLogin() {
    this.loginRealizado = 'Autenticação realizada com sucesso, bem vindo ' + this.usuario + '!';
  }
}