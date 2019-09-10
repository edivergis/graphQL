const { usuarios, perfis } = require('../data/db.js')

module.exports = {
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