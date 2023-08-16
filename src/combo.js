// Sub classe que representa os cambos do cardapio

import {Item} from "./item";
class Combo extends Item{
    constructor(nome,descricao,valor){
        super(nome,descricao,valor)
        // extrai da descrição os compotentes do combo
        var aux = descricao.split("e")
        for(var i=0;i<aux.length;i++){
            aux[i] = aux[i].replace(/[0-9]/g,'');
            aux[i] = aux[i].trim();
        }

        this.componentes = aux;
    }

    get_componentes(){
        return this.componentes;
    }

    set_componentesco(comp){
        this.componentes = comp;

    }
}

export {Combo}