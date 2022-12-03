let maior18

function checaIdade(){

    idade = document.getElementById("numberIdade").value
    
    if (idade >= 18){
        maior18 = true

    }
        else {
            maior18 = false
        }
window.location.href="redirect.html?idade="+idade
}

function maiorIdade (){
    idade == Sim
    window.location.href="redirect.html?idade="+idade
}
function menorIdade (){
    idade == Não
    window.location.href="redirect.html?idade="+idade
}

function carregaPagina() {

    const url = new URLSearchParams(window.location.search)

    let idade = url.get("idade")
    
    if (idade >= 18){
        document.getElementById("meuSite").innerHTML = "<p>Olá gostaria de te dar boas vindas a Cervejaria do Pericles. </p> <p> Aqui você encontrará as melhores bebidas do Brasil!</p>"

    } else {
        document.getElementById("meuSite").innerHTML = "<p>Você não pode usar esse site!<p>"
    }


}