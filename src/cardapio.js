import { Item } from "./item.js"
import {Combo} from "./combo.js"
import {Extra} from "./extra.js"
class Cardapio{
    constructor(){
        
        this.items = {}
    }

    inicializa_cardapio(){
        const cafe = new Item("cafe","Café","3.00");
        const chantily = new Extra("chantily","Chantily (extra do Café)","1.50","cafe");
        const suco = new Item("suco","Suco Natural", "6.20");
        const sanduiche = new Item("sanduiche","Sanduíche","6.50");
        const queijo = new Extra("queijo","Queijo (extra do Sanduíche)", "2.00","sanduiche");
        const salgado =  new Item("Salgado","Salgado","7.25");
        const combo1 = new Combo("combo1","1 Suco e 1 Sanduíche","9.50");
        const combo2 = new Combo("combo2","1 Café e 1 Sanduíche", "7.50");
        this.items["cafe"] = cafe;
        this.items["chantily"] = chantily;
        this.items["suco"] = suco;
        this.items["sanduiche"] = sanduiche;
        this.items["queijo"] = queijo;
        this.items["salgado"] = salgado;
        this.items["cambo1"] = combo1;
        this.items["cambo2"] = combo2;
    }

    get_valor(nome){
        return this.items[nome].get_valor();
    }

    get_item(nome){
        return this.items[nome]
    }

    tem_item(nome){
        return nome in this.items ? true : false; 
    }

    e_extra(nome){
        return this.items[nome] instanceof Extra ? true : false
    }
}

export {Cardapio};