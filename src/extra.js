// Sub classe que representa os extras dos item do cardapio

import { Item } from "./item";
class Extra extends Item{
    constructor(nome,descricao,valor,extra_de){
        super(nome,descricao,valor);
        this.extra_de = extra_de // De qual item é extra
    }

    get_extra_de(){
        return this.extra_de;
    }

    set_extra_de(principal){
        this.extra_de = principal;

    }
}

export {Extra};