import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class AtualizaUsuarioDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    @IsOptional() //Verifcar se ele informou o nome, se nao informou nao valida
    nome: string;

    @IsEmail({}, { message: 'O e-mail informado é inválido' })
    @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    @IsOptional()
    senha: string;
}