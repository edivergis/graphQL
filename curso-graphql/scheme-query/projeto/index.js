const { ApolloServer, gql } = require('apollo-server')

const usuarios = [{
    id: 1,
    nome: 'Edi Vergis',
    email: 'evergis@zemail.com',
    idade: 35,
    perfil_id:1
},{
    id: 2,
    nome: 'Bruna Vergis',
    email: 'bvergis@zemail.com',
    idade: 27,
    perfil_id:1
},{
    id: 3,
    nome: 'Daniel Vergis',
    email: 'dvergis@zemail.com',
    idade: 3,
    perfil_id:2
},{
    id: 4,
    nome: 'Calebe Vergis',
    email: 'cvergis@zemail.com',
    idade: 2,
    perfil_id:2
}]

const perfis = [{
    id:1,
    nome:'Comum'
},{
    id:2,
    nome:'Administrador'
}]

const typeDefs = gql`

    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        perfil: Perfil
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto:Float
    }

    type Perfil {
        id:Int!
        nome: String!
    }

    #pontos de entrada da sua API!
    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numeroMegaSena:[Int]
        usuarios:[Usuario]
        usuario(id:ID): Usuario
        perfis:[Perfil]
        perfil(id:Int):Perfil
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
        },
        perfil(usuario){
            const sels = perfis.filter(p => p.id === usuario.perfil_id)
            return sels ? sels[0] : null  
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
        },
        numeroMegaSena() {
            // return [4,8,13,27,33,54]
            const crescente = (a, b) => a - b
            return Array(6).fill(0).map(()=> parseInt(Math.random()*60+1)).sort(crescente)
        },
        usuarios() {
            return usuarios
        },
        usuario(_,{ id }){
            const sels = usuarios.filter(u => u.id == id)
            return sels ? sels[0] : null 
        },
        perfil(_, { id }){
            const sels = perfis.filter(p => p.id === id)
            return sels ? sels[0] : null  
        },
        perfis(){
            return perfis
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