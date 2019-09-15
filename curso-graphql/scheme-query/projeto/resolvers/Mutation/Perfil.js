const { perfis, proximoId } = require('../../data/db')

function indicePerfil(filtro) {
    if (!filtro) return -1
    const { id } = filtro
    if(id) {
        return perfis.findIndex(p => p.id === id)
    }
    return -1
}

module.exports = {
   novoPerfil(_, { dados }){
       const perfilExistente = perfis.some(p => p.nome === dados.nome)
       if (perfilExistente) {
           throw new Error('Perfil já cadastrado')
       }
       const novo = {
           id: proximoId(),
           ...dados, //espalha as variáveis para dentro do objeto
       }

       perfis.push(novo)
       return novo
   }, 
   excluirPerfil(_, { filtro }) {
       const i = indicePerfil(filtro)
       if (i < 0) return null
       const excluidos = perfis.splice(i, 1)
       return excluidos ? excluidos[0] : null
   },
   alterarPerfil(_, { filtro, input }) {
       const i = indicePerfil(filtro)
       if (i < 0) return null

       perfis[i].nome = input.nome
    return perfis[i]
   }
}