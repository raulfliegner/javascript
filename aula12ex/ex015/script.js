function Calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    formano = document.getElementById('txtano')
    anonasc = Number(formano.value)
    if (anonasc <= 0 || anonasc > ano) {
        window.alert(`[ERRO] Verifique as informações e tente novamente.`)
    }
}