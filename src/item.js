class Item{
    constructor(nome,descricao,valor){
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
    }

    get_nome(){
        return this.nome;
    }

    set_nome(novo_nome){
        this.nome = novo_nome;
    }

    get_descricao(){
        return this.descricao;
    }

    set_descricao(nova_descricao){
        this.descricao = nova_descricao;
    }

    get_valor(){
        return this.valor;
    }

    set_valor(novo_valor){
        this.valor = novo_valor;
    }   
}

export { Item };