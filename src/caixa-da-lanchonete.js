import { Cardapio } from "./cardapio";
class CaixaDaLanchonete {

    constructor(){
        this.pagamentos_aceitos = {
            "dinheiro": 0.95,
            "credito" : 1.03,
            "debito"  : 1.0 
        };

        this.cardapio = new Cardapio();
    }
    carrinho_vazio(itens){
        return itens.length <=0
    }
    pagamento_valido(metodoDePagamento){
        return Object.keys(this.pagamentos_aceitos).includes(metodoDePagamento)
    }

    pedido_valido(pedido){
        return pedido.length==2  & this.cardapio.tem_item(pedido[0].trim().toLowerCase());
    }

    quantidade_valida(qtd){

    }

    calcularValorDaCompra(metodoDePagamento, itens) {

        
        let total = 0;
        let valor_item;
        let qtd_item;
        
        if (this.carrinho_vazio(itens)){
           
            return "Não há itens no carrinho de compra!";
        }
        
        if (! this.pagamento_valido(metodoDePagamento)){
            return "Forma de pagamento inválida!";
        }

        for(var i =0;i<itens.length;i++){
            var aux = itens[i].split(",");
            
            if (!this.pedido_valido(aux)){
                return "Item inválido!";
            }

            if (this.cardapio.eh_extra(aux[0])){
                
                if (!(itens.some(e =>e.includes(this.cardapio.get_item(aux[0]).get_extra_de())))){
                    return "Item extra não pode ser pedido sem o principal";
                }
            }

            qtd_item = parseInt(aux[1],10)
            if (isNaN(qtd_item) || qtd_item <=0){
                return "Quantidade inválida!";
            }

            valor_item = parseFloat(this.cardapio.get_valor(aux[0]));
            qtd_item = parseInt(aux[1],10)

            total+=(valor_item*qtd_item)
            
        }

        total = total*this.pagamentos_aceitos[metodoDePagamento.toLowerCase()]
        total = "R$ " + total.toFixed(2).toString().replace('.',',');
        return total
    }

}

export { CaixaDaLanchonete };
