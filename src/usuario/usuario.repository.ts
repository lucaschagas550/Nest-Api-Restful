import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable() //Anotacao para ser um provider
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {
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

    //Partial faz com que todas propriedades da model fossem opcionais, assim n eh obrigatorio passar todos os dados
    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        const possivelUsuario = this.buscaPorId(id);

        if (!possivelUsuario) { // se nao encontrar um usuario gera uma execao
            throw new Error('Usuário não existe');
        }

        //Mapeia as propriedades do objeto para substituir o valor
        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }

            possivelUsuario[chave] = valor;
        });

        return possivelUsuario;
    }

    async remove(id: string) {
        const usuario = this.buscaPorId(id);
        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        );

        return usuario;
    }

    private buscaPorId(id: string) {
        const possivelUsuario = this.usuarios.find(
            u => u.id === id
        );

        if (!possivelUsuario) {
            throw new Error('Usuário não existe');
        }

        return possivelUsuario;
    }
}