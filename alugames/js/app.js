function alterarStatus(Id) {
    
   
    let gameItem = document.getElementById(`game-${Id}`);
    let button = gameItem.querySelector('.dashboard__item__button');
    let imagem = gameItem.querySelector('.dashboard__item__img')

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm('Tem certeza que deseja devolver o jogo'))
        button.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        button.innerHTML = 'Alugar';
    }else{
        button.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        button.innerHTML = 'Devolver';
    }
}

function informarJogos() {
    
}
