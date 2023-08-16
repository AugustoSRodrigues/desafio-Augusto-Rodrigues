import {Item} from "./item.js"
import {Combo} from "./combo.js"
import {Extra} from "./extra.js"

// Classe que reprsenta o cardapio
class Cardapio{
    constructor(){
        
        this.itens = {}
        this.itens["cafe"] = new Item("cafe","Café","3.00");
        this.itens["chantily"] = new Extra("chantily","Chantily (extra do Café)","1.50","cafe");
        this.itens["suco"] = new Item("suco","Suco Natural", "6.20");
        this.itens["sanduiche"] =new Item("sanduiche","Sanduíche","6.50");
        this.itens["queijo"] = new Extra("queijo","Queijo (extra do Sanduíche)", "2.00","sanduiche");
        this.itens["salgado"] = new Item("Salgado","Salgado","7.25");
        this.itens["cambo1"] = new Combo("combo1","1 Suco e 1 Sanduíche","9.50");
        this.itens["cambo2"] = new Combo("combo2","1 Café e 1 Sanduíche", "7.50");
    }

    get_valor(nome){
        return this.itens[nome.toLowerCase()].get_valor();
    }

    get_item(nome){
        return this.itens[nome.toLowerCase()]
    }

    tem_item(nome){
        return nome.toLowerCase() in this.itens ;
    }

    eh_extra(nome){
        return this.itens[nome.toLowerCase()] instanceof Extra ;
    }

    get_extra_de(nome){
       
        try{
            return this.itens[nome.toLowerCase()].get_extra_de();
        }
        catch(err){
            console.log(err)
        }
    }
}

export {Cardapio};


