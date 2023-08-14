import { Item } from "./item";
class Combo extends Item{
    constructor(nome,descricao,valor){
        super(nome,descricao,valor)
        var aux = descricao.split("e")
        for(var i=0;i<aux.length;i++){
            aux[i] = aux[i].replace(/[0-9]/g,'');
            aux[i] = aux[i].trim();
        }

        this.componentes = aux;
    }
}

export {Combo}