import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Ola Galerinha';
  ativado: boolean = false;
  contador: number = 0;
  changeStatus() {
    this.ativado = !this.ativado;
  }

  contar() {
    if (this.ativado == true) {
      this.contador++;
    } else {
      alert("Errouuuu")
    }
  }

  zerarContador() {
    if (this.ativado == true) {
      this.contador = 0;
    } else {
      alert("Desbloqueia")
    }

  }


}
