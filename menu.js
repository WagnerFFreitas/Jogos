const cards = document.querySelectorAll('.caixa__card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        let url;
        if (card.classList.contains('alimentos')) {
            url = 'alimentos/alimentos.html';
        } else if (card.classList.contains('lugaresbiblicos')) {
            url = 'lugaresbiblicos/lugaresbiblicos.html';
        } else if (card.classList.contains('nomebiblicos')) {
            url = 'nomebiblicos/nomebiblicos.html';
        } else if (card.classList.contains('nomejogos')) {
            url = 'nomejogos/nomejogos.html';
        } else if (card.classList.contains('nomecarros')) {
            url = 'nomecarros/nomecarros.html';
        } else if (card.classList.contains('timefutebol')) {
            url = 'timefutebol/timefutebol.html';
        } else if (card.classList.contains('dicionario')) {
            url = 'dicionario/dicionario.html';
        } else if (card.classList.contains('nomepessoas')) {
            url = 'nomepessoas/nomepessoas.html';
        }

        if (url) {
            window.open(url, '_self');
        }
    });
});
