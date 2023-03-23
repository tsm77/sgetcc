export class Usuario {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    admin: boolean;

    constructor(nome: string, sobrenome: string, email: string, telefone:string, admin: boolean){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.admin = admin;
    }
}