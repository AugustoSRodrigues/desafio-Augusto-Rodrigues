import { Cardapio } from "./cardapio";
class CaixaDaLanchonete {

    constructor(){
        // Object que armazena as formas aceitas de pagamneto 
        //e seus respectivos modificadores (desconto/acrescimo) do valor da compra
        this.pagamentos_aceitos = {
            "dinheiro": 0.95,
            "credito" : 1.03,
            "debito"  : 1.0 
        };

        this.cardapio = new Cardapio();
    }
    carrinho_vazio(itens){
        // Verifica se o carrinho(itens) está vazio
        return itens.length <=0
    }
    pagamento_valido(metodoDePagamento){
        // Verifica se a forma de pagamento é valida
        return Object.keys(this.pagamentos_aceitos).includes(metodoDePagamento.toLowerCase())
    }

    pedido_valido(pedido){
        // Verifica se o pedido é valido:
        // Verifica se há o item pedido no cardapio
        return pedido.length==2  & this.cardapio.tem_item(pedido[0].trim());
    }

    quantidade_valida(qtd){
        //Verifica se a quantidade pedida de um item é valida
        return !(isNaN(qtd)) & qtd >0;
    }

    contem_principal(itens,nome){
        //verifica se o item princiapal está no carrinho
        //Verifica tanto se estiver escrito em maiusculo quanto minisculo
        return itens.some(e => e.toLowerCase().includes(this.cardapio.get_extra_de(nome)))
    }

    calcularValorDaCompra(metodoDePagamento, itens) {

        
        let total = 0; // Valor total da compra
        let valor_item;
        let qtd_item;
        
        if (this.carrinho_vazio(itens)){
           
            return "Não há itens no carrinho de compra!";
        }
        
        if (! this.pagamento_valido(metodoDePagamento)){
            return "Forma de pagamento inválida!";
        }

        for(var i=0;i<itens.length;i++){
            let pedido = itens[i].split(","); // pedido no formato [item,quantidade]
            
            if (!this.pedido_valido(pedido)){
                return "Item inválido!";
            }

            if (this.cardapio.eh_extra(pedido[0])){
                
                if (!(this.contem_principal(itens,pedido[0]))){ 
                    return "Item extra não pode ser pedido sem o principal";
                }
            }

            qtd_item = parseInt(pedido[1],10)
            if (!this.quantidade_valida(qtd_item)){
                return "Quantidade inválida!";
            }

            valor_item = parseFloat(this.cardapio.get_valor(pedido[0]));
            

            total+=(valor_item*qtd_item)
            
        }

        total = total*this.pagamentos_aceitos[metodoDePagamento.toLowerCase()]
        total = "R$ " + total.toFixed(2).toString().replace('.',',');
        return total
    }

}

export { CaixaDaLanchonete };
