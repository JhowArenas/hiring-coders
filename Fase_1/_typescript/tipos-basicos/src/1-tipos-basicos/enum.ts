enum Permissoes {
    admin = "ADMIN",
    editor = "EDITOR",
    comun = "COMUN",
}

const usuario = {
    nivel: Permissoes.admin,
}

console.log(usuario)