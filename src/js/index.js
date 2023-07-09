
const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerHeight < 450){
            window.scrollTo({top: 0 , behavior: 'smooth'});
        }
        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');
        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagemSelecionado(personagem);
        alterarDiscricaoPersonagemSelecionado(personagem);
    })
})

function alterarDiscricaoPersonagemSelecionado(personagem) {
    const discricaoPersonagem = document.getElementById('descricao-personagem');
    discricaoPersonagem.innerText = personagem.getAttribute('data-discription');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

