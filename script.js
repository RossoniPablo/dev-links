function toggleMode() {
    //Trocando de tema
    const html = document.documentElement
    html.classList.toggle('light')

    //pegando tag img e substituindo
    const img = document.querySelector('.profile img ')

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/img/photo-light.png')

        img.setAttribute('alt', 'teste')
    }
    else {
        img.setAttribute('src', './assets/img/photo.png')
    }
}