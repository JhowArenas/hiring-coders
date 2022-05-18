let estaAtivo: boolean;

//...
estaAtivo = true;

function mapearStatusDeUsusario(estaAtivo: boolean): string {
    if (estaAtivo) return 'Usuário está ativo';
    else return 'Usuário não está Inativo';
}

mapearStatusDeUsusario(true)
mapearStatusDeUsusario(false)