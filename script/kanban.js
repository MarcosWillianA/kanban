const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('arrastavel');
    })

    card.addEventListener('dragend', e=> {
        e.currentTarget.classList.remove('arrastavel');
    })
})

sections.forEach(secao => {
    secao.addEventListener('dragover', e => {
        e.preventDefault();
        e.currentTarget.classList.add('card-hover');
    })

    secao.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('card-hover');
    })

    secao.addEventListener('drop', e => {
        e.currentTarget.classList.remove('card-hover');
        const arrastado = document.querySelector('.arrastavel');
        e.currentTarget.appendChild(arrastado);
    })
})

