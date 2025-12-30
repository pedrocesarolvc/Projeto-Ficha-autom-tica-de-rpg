function calcularLevel() {
    let level = parseInt(document.getElementById('level').value) // pega o valor do level criado no html;
    let proeficiencia = document.getElementById('proeficiencia')
    if (level === 0) { //tratando um mini erro
        window.alert("Erro de Level, ensira um número válido a partir do 1")
    }

    if (level === 1) {
        proeficiencia.innerHTML = 1
    } else {
        proeficiencia.innerHTML = Math.trunc(level / 2)
    }

    if (level > 20) {
        window.alert("Erro de level, nível inexistente!")
        proeficiencia.innerHTML = 0
    }
    
}

//usando id
//Sabedoria
function mostrarValorS(id) { //altera o valor bruto para o modificador
    let valor = document.getElementById(id) //pega o valor baseado no id
    valor.dataset.original = valor.textContent // guarda o valor original
    valor.textContent = calcularBonus(valor.textContent) //atribui o novo com base no original
}
function restaurarValorS(id) { //retorna o modificador para o valor bruto
    let valor = document.getElementById(id) //pega o valor baseado no id
    valor.textContent = valor.dataset.original //retorna com o valor original
}
//---//

function editarAtributo(id) {
    // Esconde o span e mostra o input
    const span = document.getElementById(id);
    const input = document.getElementById(`input-${id}`);
    
    span.style.display = 'none';
    input.style.display = 'block';
    input.value = span.textContent;
    input.focus();
    input.select();
}
//---//

function atualizarAtributo(id) {
    // Esconde o input e mostra o span com o novo valor
    const span = document.getElementById(id);
    const input = document.getElementById(`input-${id}`);
    
    // Validação básica - pode adicionar mais conforme necessário
    let valor = parseInt(input.value) || 0;
    valor = Math.max(0, Math.min(valor, 99)); // Limita entre 0 e 99
    
    span.textContent = valor;
    span.style.display = 'block';
    input.style.display = 'none';
}
//---//

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
//---//

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
//---//

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
//---//

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
//---//

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
//---//

//Área de Salvamento//
let valorS = mostrarValorS;
let valorC = mostrarValorC;
let valorI = mostrarValorI;
let valorD = mostrarValorD;
let valorF = mostrarValorF;
let valorCo = mostrarValorCo;
//---//


//Calculo do Modificador de atributo
function calcularBonus(valorTexto){ //dinamiza o calculo do modificador de atributo
    let valor = Number(valorTexto) //altera o tipo pra number
    let mod = Math.floor((valor-10)/2) //logica para transformar atributo em modificador
    return (mod >= 0 ? "+" : "") + mod //logica do modificador
}


//---//

function pericias(element) { //função para as perícias treinadas
    let selecionada = element.classList.contains("ativa") //cria a classe ativa

    const input = element.querySelector("input[type='number']");
    console.log(input);
    let proeficiencia = parseInt(document.getElementById('proeficiencia').textContent)
    
    if (selecionada) {
        element.classList.remove("ativa"); //remove a classe
        element.style.borderColor = ""; //cor padrão

        input.value = parseInt(input.value) - proeficiencia;
    } else {
        element.classList.add("ativa"); //coloca a classe
        element.style.borderColor = "#00FF00"; //troca a cor para verde caso selecionada

        input.value = parseInt(input.value) + proeficiencia;
    }
}

// Objeto com os modificadores raciais
const modificadoresRaciais = {
    humano: {
        nome: "Humano",
        modificadores: {
            flexivel: 2
        }
    },
    northun: {
        nome: "Northun",
        modificadores: {
            constituicao: 2,
        }
    },
    asheet: {
        nome: "Asheet",
        modificadores: {
            destreza: 2,
            forca: -2
        }
    },
    thundariano: {
        nome: "Thundariano",
        modificadores: {
            inteligencia: 2
        }
    },
    lumas: {
        nome: "Lumas",
        modificadores: {
            flexivel: 1,
            flexivel2: 1
        }
    }
    //proxima raça: Lumas --> estudar o seletor feito dos humanos!!!!!
};

// Variável para armazenar a raça atual
let racaAtual = null;
// Variável para armazenar o valor do humano ou lumas
let atributoFlexivelEscolhido = null;
let atributoFlexivelEscolhido2 = null;
let primeiroAtributoSelecionado = false; //controle para as Lumas
// Função para aplicar os modificadores raciais
function aplicarModificadoresRaciais(raca) {
    // Remove modificadores da raça anterior
    if (racaAtual) {
        const modificadoresAnteriores = modificadoresRaciais[racaAtual].modificadores;
        for (const atributo in modificadoresAnteriores) {
            if (atributo !== 'flexivel') { // Ignora o flexível aqui
                const span = document.getElementById(atributo);
                if (span) {
                    const valorAtual = parseInt(span.textContent) || 0;
                    const modificador = modificadoresAnteriores[atributo];
                    span.textContent = valorAtual - modificador;
                }
            }
        }

    }
    
    // Aplica os novos modificadores
    racaAtual = raca;
    
    if (raca) {
        const modificadores = modificadoresRaciais[raca].modificadores;
        
        // Aplica os modificadores fixos primeiro
        for (const atributo in modificadores) {
            if (atributo !== 'flexivel') {
                const span = document.getElementById(atributo);
                if (span) {
                    const valorAtual = parseInt(span.textContent) || 0;
                    const modificador = modificadores[atributo];
                    span.textContent = valorAtual + modificador;
                }
            }
        }
        
        // Se for humano, mostra o seletor para o bônus flexível
        if (raca === 'humano' || raca === "lumas") {
            mostrarSeletorAtributoFlexivel();
        } else {
            esconderSeletorAtributoFlexivel();
        }
    } else {
        esconderSeletorAtributoFlexivel();
    }
}

// Funções para mostrar/esconder o seletor de atributo flexível
function mostrarSeletorAtributoFlexivel() {
    const seletorHTML = `
        <div id="seletor-flexivel">
            <p>${racaAtual === 'humano'
                ? 'Escolha um atributo para receber o bônus de +2:'
                : 'Escolha dois atributos diferentes para receber +1 cada:'}</p>
            <select id="atributo-flexivel">
                <option value="" disabled selected>Selecione</option>
                <option value="forca">Força</option>
                <option value="destreza">Destreza</option>
                <option value="constituicao">Constituição</option>
                <option value="inteligencia">Inteligência</option>
                <option value="sabedoria">Sabedoria</option>
                <option value="carisma">Carisma</option>
            </select>
        </div>
    `;
    
    // Insere o seletor após o campo de raça
    const racaContainer = document.querySelector('h1').parentNode;
    racaContainer.insertAdjacentHTML('beforeend', seletorHTML);
    
    // Adiciona o evento de change
    document.getElementById('atributo-flexivel').addEventListener('change', function() {
        const atributo = this.value; 
        // Remove o bônus anterior se existir

        if (racaAtual === 'humano') { //logica dos humanos

            if (atributoFlexivelEscolhido) {
                const spanAnterior = document.getElementById(atributoFlexivelEscolhido);
                if (spanAnterior) spanAnterior.textContent = parseInt(spanAnterior.textContent) - 2;
            }

            const spanNovo = document.getElementById(atributo);
            if(spanNovo) {
                spanNovo.textContent = parseInt(spanNovo.textContent) + 2;
                atributoFlexivelEscolhido = atributo;
            }
        }
        else if (racaAtual === 'lumas') { //logica das lumas
            if (!primeiroAtributoSelecionado) { //tratamento da primeira seleção, remove qualquer bônus anterior se existir.
                if (atributoFlexivelEscolhido) {
                    const spanAnterior = document.getElementById(atributoFlexivelEscolhido);
                    if(spanAnterior) spanAnterior.textContent = parseInt(spanAnterior.textContent) - 1;
                }

                const spanNovo = document.getElementById(atributo);
                if(spanNovo) {
                    spanNovo.textContent = parseInt(spanNovo.textContent) + 1;
                    atributoFlexivelEscolhido = atributo;
                    primeiroAtributoSelecionado = true;

                    criarSegundoSeletorLumas(atributo);
                    adicionarEventosSegundoSeletor();
                }
            }
        }      
    }); 

    function criarSegundoSeletorLumas(atributoExcluido) { 
        const segundoSeletorHTML = `
                ${racaAtual === 'Lumas' ? '<div id="segundo-seletor" style="margin-top: 10px;"></div>' : ''}
                <select>
                    <option value="" disabled selected>Selecione o segundo atributo</option>
                        ${['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma']
                            .filter(a => a !== atributoExcluido)
                            .map(a => `<option value="${a}">${a}</option>`).join('')}
                </select>
        `;
        segundoSeletorHTML.innerHTML = document.getElementById('segundo-seletor');           
    }//segundo seletor de atributo das lumas com a mesma logica
    
    function adicionarEventosSegundoSeletor() { //separa os eventos para nenhum se sobrepor
        const segundoSeletor = document.getElementById('atributo-flexivel2');

        if (segundoSeletor) {
            segundoSeletor.replaceWith(segundoSeletor.cloneNode(true));
        //replaceWith(sua variavel.cloneNode(true)); bomba nuclear que apaga os outros eventos relacionados a uma var e os reescreve

            document.getElementById('atributo-flexivel2').addEventListener('change', function() {
                const atributo2 = this.value;

                if (atributoFlexivelEscolhido2) {
                    const spanAnterior = document.getElementById(atributoFlexivelEscolhido2);
                    if (spanAnterior) spanAnterior.textContent = parseInt(spanAnterior.textContent) - 1
                }

                const spanNovo = document.getElementById(atributo2);
                if (spanNovo) {
                    spanNovo.textContent = parseInt(spanNovo.textContent) + 1
                    atributoFlexivelEscolhido2 = atributo2
                }
            });
        }
    }                       
}

function esconderSeletorAtributoFlexivel() {
    const seletor = document.getElementById('seletor-flexivel');
    if (seletor) {
        seletor.remove();
        atributoFlexivelEscolhido = null;
        atributoFlexivelEscolhido2 = null;
        primeiroAtributoSelecionado = false; //reseta
    }
}

//limpa o seletor quando mudar de raça
function mostrarRaca() {
    const selec = document.getElementById('racas');
    const racaValue = selec.value;
    const racaTxt = selec.options[selec.selectedIndex].text;
    document.getElementById('resultado').textContent = racaTxt;
    
    // Esconde o seletor flexível se estiver visível
    esconderSeletorAtributoFlexivel();
    
    // Aplica os modificadores raciais
    aplicarModificadoresRaciais(racaValue);
}

// Inicializa os atributos com valor 10 quando a página carrega
window.onload = function() {
    const atributos = ['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma'];
    atributos.forEach(atributo => {
        document.getElementById(atributo).textContent = '10';
    });
};