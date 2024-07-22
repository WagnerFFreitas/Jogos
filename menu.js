const cards = document.querySelectorAll('.caixa__card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        let url;
        if (card.classList.contains('alimentos')) {
            url = 'Alimentos/alimentos.html';
        } else if (card.classList.contains('lugaresbiblicos')) {
            url = 'Lugaresbiblicos/lugaresbiblicos.html';
        } else if (card.classList.contains('nomebiblicos')) {
            url = 'Nomebiblicos/nomebiblicos.html';
        } else if (card.classList.contains('nomejogos')) {
            url = 'Nomejogos/nomejogos.html';
        } else if (card.classList.contains('nomecarros')) {
            url = 'Nomecarros/nomecarros.html';
        } else if (card.classList.contains('timefutebol')) {
            url = 'Timefutebol/timefutebol.html';
        } else if (card.classList.contains('dicionario')) {
            url = 'Dicionario/dicionario.html';
        } else if (card.classList.contains('nomepessoas')) {
            url = 'Nomepessoas/nomepessoas.html';
        }

        if (url) {
            window.open(url, '_self');
        }
    });
});
