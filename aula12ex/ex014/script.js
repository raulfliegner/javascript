function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        //BOM DIA
        img.src = 'imagens/manhã.png'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#515154'
    }
}