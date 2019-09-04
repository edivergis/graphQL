const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`

    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    #pontos de entrada da sua API!
    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto:Float
    }
`

const resolvers = {
    Produto: {
        precoComDesconto(produto){
            if (produto.desconto) {
                return produto.preco - (produto.preco * produto.desconto)
            }
            return produto.preco
            
        }
    },
    Usuario:{
        salario(usuario) {
            return usuario.salario_atual
        }
    },
    Query: {
        produtoEmDestaque(){
            return {
                nome: 'macBook Pro',
                preco: '10000.00',
                desconto: 0.15,
            }
        },
        ola() {
            return 'Its Work!'
        },
        horaAtual() {
            return new Date
        },
        usuarioLogado() {
            return {
                id: 111,
                nome: 'evergis',
                email: 'edi.vergis@gmail.com',
                idade: 35,
                salario_atual: 1234.56,
                vip: true
            }
        }
    }

}

const server = new ApolloServer({

    typeDefs,
    resolvers

})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})