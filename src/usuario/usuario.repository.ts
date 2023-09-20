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

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }
}