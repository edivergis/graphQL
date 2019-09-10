const { perfis } = require('../data/db.js')

module.exports = {
    salario(usuario) {
        return usuario.salario_atual
    },
    perfil(usuario){
        const sels = perfis.filter(p => p.id === usuario.perfil_id)
        return sels ? sels[0] : null  
    }
}