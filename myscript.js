function mudarFrase() {
    var elemento = document.getElementById("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    //altera o fundo da página
    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/a.jpeg\' />"
}

function trocarClasse(){
    console.log("Trocou Classe")
    var fraseAtual = document.getElementById("frase");
    fraseAtual.className = "h1_2";
}

function trocarTexto(){
    var elemento = gebi ("frase")
    var nova = gebi("novaFrase").value
    elemento.innerHTML = nova
}

function gebi (id){
    return document.getElementById (id)
}