import {Item} from "./item.js"
import {Combo} from "./combo.js"
import {Extra} from "./extra.js"

// Classe que reprsenta o cardapio
class Cardapio{
    constructor(){
        
        this.items = {}
        this.items["cafe"] = new Item("cafe","Café","3.00");
        this.items["chantily"] = new Extra("chantily","Chantily (extra do Café)","1.50","cafe");
        this.items["suco"] = new Item("suco","Suco Natural", "6.20");
        this.items["sanduiche"] =new Item("sanduiche","Sanduíche","6.50");
        this.items["queijo"] = new Extra("queijo","Queijo (extra do Sanduíche)", "2.00","sanduiche");
        this.items["salgado"] = new Item("Salgado","Salgado","7.25");
        this.items["cambo1"] = new Combo("combo1","1 Suco e 1 Sanduíche","9.50");
        this.items["cambo2"] = new Combo("combo2","1 Café e 1 Sanduíche", "7.50");
    }

    get_valor(nome){
        return this.items[nome.toLowerCase()].get_valor();
    }

    get_item(nome){
        return this.items[nome.toLowerCase()]
    }

    tem_item(nome){
        return nome.toLowerCase() in this.items ;
    }

    eh_extra(nome){
        return this.items[nome.toLowerCase()] instanceof Extra ;
    }

    get_extra_de(nome){
        try{
            return this.items[nome.toLowerCase()].get_extra_de();
        }
        catch(err){
            console.log(err)
        }
    }
}

export {Cardapio};


