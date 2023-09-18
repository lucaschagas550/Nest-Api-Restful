import { Injectable } from "@nestjs/common";

@Injectable() //Anotacao para ser um provider
export class UsuarioRepository {
    private usuarios = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
        console.log(this.usuarios);
    }

    async listar() {
        return this.usuarios;
    }

}