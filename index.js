var SetaDireita = window.document.getElementById("SetaDireita")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samanta = window.document.getElementById("samanta")
var SetaEsquerda = window.document.getElementById("SetaEsquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    samanta.style = "display:flex"
    SetaEsquerda.style = "display:flex; margin-top:55px"
    SetaDireita.style = "display:none"

}
function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    samanta.style = "display:none"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}
