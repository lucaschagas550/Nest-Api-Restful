import { IsEmail, IsString, MinLength } from "class-validator";

export class CriaUsuarioDTO {

    @IsString({ message: 'O nome não pode ser vazio' })
    nome: string;

    //pode ser passado undefined em vez de {}
    @IsEmail({}, { message: 'O e-mail informado é inválido' })
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    senha: string;
}