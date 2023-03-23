import { Component } from '@angular/core';
import { Usuario } from './domain/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cliente';

  mostrarMenu : boolean = false;
  usuarioLogado : Usuario;



  logarUsuario(usuario: any){
    this.usuarioLogado = usuario;
  }
}
