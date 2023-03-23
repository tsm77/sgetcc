export class Produto {
    id? : number;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: string;
    criadoEm: Date;
    id_usuario: number;

    constructor(nome: string, preco: number, descricao: string, quantidade: string, criadoEm: Date, id_usuario: number){
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.criadoEm = criadoEm;
        this.id_usuario = id_usuario;
    }

}