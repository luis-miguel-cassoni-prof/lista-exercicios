import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: false,
  templateUrl: './ex2.html',
  styleUrl: './ex2.scss',
})
export class Ex2 {
  usuario: string = "";
  usuarioLogado: boolean = false;

  efetuarLoginOuSair() {
    if(this.usuario == "" && this.usuarioLogado == false) {
      this.usuarioLogado = false;
    } else if(this.usuario != "" && this.usuarioLogado == false) {
      this.usuarioLogado = true;
    } else if(this.usuarioLogado == true) {
      this.usuarioLogado = false;
    }
  }
}
