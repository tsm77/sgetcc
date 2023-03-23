import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chave } from 'src/app/domain/chave';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {

  @Output() emitUsuario: EventEmitter <Usuario> = new EventEmitter;
  mostrarMenu: boolean = false;
  chaveInput: string;
  formChave : FormGroup;
  chave = new Chave();

  constructor(public usuarioService: UsuarioService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formChave = this.fb.group({chave: ''});
    this.pegarUsuarioLocal();
  }

  pegarUsuarioLocal(){
    const usuario = JSON.parse(window.localStorage.getItem("usuario")!);
    this.emitUsuario.emit(usuario);
  }

  logarUsuario(chaveInput: string){
    this.chave.chave = chaveInput;
    this.usuarioService.buscarUsuarioPorChave(this.chave).subscribe((usuario: Usuario) => {
      this.emitUsuario.emit(usuario);
      localStorage.setItem("usuario", JSON.stringify(usuario));
    });
  }

}
