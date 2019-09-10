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

module.exports = { usuarios, perfis }