const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked')
        window.open('Alimentos/forca.html', '_self');
    });
});
