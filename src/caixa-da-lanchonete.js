import { Cardapio } from "./cardapio";
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let pagamentos_aceitos = ["dinheiro","debito","credito"];
        let total = 0;
        const cardapio = new Cardapio();
        cardapio.inicializa_cardapio();
        
        
       
        if (itens.length <=0){
           
            return "Não há itens no carrinho de compra!";
        }

        if (!pagamentos_aceitos.includes(metodoDePagamento)){
            return "Forma de pagamento inválida!";
        }

        for(var i =0;i<itens.length;i++){
            var aux = itens[i].split(",");
            
            if (aux.length <=1 && aux.length>2){
                return "Item inválido";
            }

            aux[0] = aux[0].trim();
            console.log(aux[1] instanceof String)
            

            if (!cardapio.tem_item(aux[0])){
                
                return "Item inválido!";
            }
            
            let qtd = parseInt(aux[1],10)

            if (isNaN(qtd) || qtd <=0){
                return "Quantidade inválida!";
            }

            
            
            if (cardapio.e_extra(aux[0])){
                
                if (!(itens.some(e =>e.includes(cardapio.get_item(aux[0]).get_extra_de())))){
                    return "Item extra não pode ser pedido sem o principal";
                }
            }

            var valor = cardapio.get_valor(aux[0])
            valor = parseFloat(valor)

            total+=(valor*qtd)
            
        }

        if(metodoDePagamento.toLowerCase()=="dinheiro"){
            total=total*0.95
        }
        else{
            if(metodoDePagamento.toLowerCase() == "credito"){
                total=total*1.03
            }
        }
        total = "R$ " + total.toFixed(2).toString().replace('.',',');
        return total
    }

}

export { CaixaDaLanchonete };
