var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function RolarParaDireita(){
    SetaEsquerda.style ="display:flex"
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    SetaDireita.style ="display:none"
}

function RolarParaEsquerda(){
    SetaDireita.style ="display:flex; margin-top: 90px"
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    SetaEsquerda.style ="display:none"
}