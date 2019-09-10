
module.exports = {
    precoComDesconto(produto){
        if (produto.desconto) {
            return produto.preco - (produto.preco * produto.desconto)
        }
        return produto.preco
        
    }
}