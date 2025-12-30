let proeficiencia = document.getElementById('proeficiencia')
//usando id
//Sabedoria
function mostrarValorS(id) { //altera o valor bruto para o modificador
    let valor = document.getElementById(id)
    valor.dataset.original = valor.textContent
    valor.textContent = calcularBonus(valor.textContent)

}
function restaurarValorS(id) { //retorna o modificador para o valor bruto
    let valor = document.getElementById(id)
    valor.textContent = valor.dataset.original
}
function editarValorS(id) {
    
}
//Carisma
function mostrarValorC(id) {
    let valor = document.getElementById(id)
    valor.dataset.original = valor.textContent
    valor.textContent = calcularBonus(valor.textContent)

}
function restaurarValorC(id) {
    let valor = document.getElementById(id)
    valor.textContent = valor.dataset.original
}
//Inteligência
function mostrarValorI(id) { 
    let valor = document.getElementById(id)
    valor.dataset.original = valor.textContent
    valor.textContent = calcularBonus(valor.textContent)

}
function restaurarValorI(id) {
    let valor = document.getElementById(id)
    valor.textContent = valor.dataset.original
}
//Destreza
function mostrarValorD(id) {
    let valor = document.getElementById(id)
    valor.dataset.original = valor.textContent
    valor.textContent = calcularBonus(valor.textContent)

}
function restaurarValorD(id) {
    let valor = document.getElementById(id)
    valor.textContent = valor.dataset.original
}
//Força
function mostrarValorF(id) {
    let valor = document.getElementById(id)
    valor.dataset.original = valor.textContent
    valor.textContent = calcularBonus(valor.textContent)

}
function restaurarValorF(id) {
    let valor = document.getElementById(id)
    valor.textContent = valor.dataset.original
}
//Constituição
function mostrarValorCo(id) {
    let valor = document.getElementById(id)
    valor.dataset.original = valor.textContent
    valor.textContent = calcularBonus(valor.textContent)

}
function restaurarValorCo(id) {
    let valor = document.getElementById(id)
    valor.textContent = valor.dataset.original
}
//Calculo do Modificador de atributo
function calcularBonus(valorTexto){ //dinamiza o calculo do modificador de atributo
    let valor = Number(valorTexto)
    let mod = Math.floor((valor-10)/2)
    return (mod >= 0 ? "+" : "") + mod
}

function pericias(element) {
    let selecionada = element.classList.contains("ativa")
     let proeficiencia = parseInt(document.getElementById('proeficiencia').textContent)
    
    const input = element.querySelector("input[type='number']");
    console.log(input);
    if (selecionada) {
        element.classList.remove("ativa");
        element.style.borderColor = ""; //cor padrão

        input.value = parseInt(input.value) - proeficiencia;
    } else {
        element.classList.add("ativa");
        element.style.borderColor = "#00FF00"; //troca a cor para verde 

        input.value = parseInt(input.value) + proeficiencia;
    }
}














//usando querySelector
/*function mostrarValor(elemento) {
    let valor = elemento.querySelector(".valor")
    valor.dataset.original = valor.textContent
    valor.textContent = "4"
}

function restaurarValor(elemento) {
    let valor = elemento.querySelector(".valor")
    valor.textContent = valor.dataset.original
}*/