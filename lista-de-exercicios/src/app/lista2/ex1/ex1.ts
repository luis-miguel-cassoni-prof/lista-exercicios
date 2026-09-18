import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  standalone: false,
  templateUrl: './ex1.html',
  styleUrl: './ex1.scss',
})
export class Ex1 {
  visivel: boolean = false;

  alterarMensagem() {
    if(this.visivel == true) {
      this.visivel = false;
    } else {
      this.visivel = true;
    }
  }
}
