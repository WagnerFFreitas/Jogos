const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked')
        window.open('Alimentos/alimentos.html', '_self');
        window.open('Lugaresbiblicos/lugaresbiblicos.html', '_self');
    });
});
