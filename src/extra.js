import { Item } from "./item";
class Extra extends Item{
    constructor(nome,descricao,valor,extra_de){
        super(nome,descricao,valor);
        this.extra_de = extra_de
    }

    get_extra_de(){
        return this.extra_de;
    }
}

export {Extra};