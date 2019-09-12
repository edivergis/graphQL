let id = 1
function proximoId() {
    return id++
}

const perfis = [
    {id:1,nome:'Comum'},
    {id:2,nome:'Administrador'}
]

const usuarios = [{
    id: proximoId(),
    nome: 'Edi Vergis',
    email: 'evergis@zemail.com',
    idade: 35,
    perfil_id:1,
    status: 'ATIVO'
},{
    id: proximoId(),
    nome: 'Bruna Vergis',
    email: 'bvergis@zemail.com',
    idade: 27,
    perfil_id:1,
    status: 'ATIVO'
},{
    id: proximoId(),
    nome: 'Daniel Vergis',
    email: 'dvergis@zemail.com',
    idade: 3,
    perfil_id:2,
    status: 'INATIVO'
},{
    id: proximoId(),
    nome: 'Calebe Vergis',
    email: 'cvergis@zemail.com',
    idade: 2,
    perfil_id:2,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis, proximoId }