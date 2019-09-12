const usuarios = [{
    id: 1,
    nome: 'Edi Vergis',
    email: 'evergis@zemail.com',
    idade: 35,
    perfil_id:1,
    status: 'ATIVO'
},{
    id: 2,
    nome: 'Bruna Vergis',
    email: 'bvergis@zemail.com',
    idade: 27,
    perfil_id:1,
    status: 'ATIVO'
},{
    id: 3,
    nome: 'Daniel Vergis',
    email: 'dvergis@zemail.com',
    idade: 3,
    perfil_id:2,
    status: 'INATIVO'
},{
    id: 4,
    nome: 'Calebe Vergis',
    email: 'cvergis@zemail.com',
    idade: 2,
    perfil_id:2,
    status: 'BLOQUEADO'
}]

const perfis = [{
    id:1,
    nome:'Comum'
},{
    id:2,
    nome:'Administrador'
}]

module.exports = { usuarios, perfis }