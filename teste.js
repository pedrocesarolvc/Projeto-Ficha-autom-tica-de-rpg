// ... (mantenha o objeto modificadoresRaciais como está)

// Variáveis para armazenar os atributos escolhidos
let atributoFlexivelEscolhido = null;
let atributoFlexivelEscolhido2 = null;
let primeiroAtributoSelecionado = false; // Novo controle para Lumas

// Modifique a função mostrarSeletorAtributoFlexivel
function mostrarSeletorAtributoFlexivel() {
    const seletorHTML = `
        <div id="seletor-flexivel">
            <p>${racaAtual === 'humano' 
                ? 'Escolha um atributo para receber +2:' 
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
            ${racaAtual === 'lumas' ? '<div id="segundo-seletor" style="margin-top: 10px;"></div>' : ''}
        </div>
    `;
    
    const racaContainer = document.querySelector('h1').parentNode;
    racaContainer.insertAdjacentHTML('beforeend', seletorHTML);
    
    document.getElementById('atributo-flexivel').addEventListener('change', function() {
        const atributo = this.value;
        
        if (racaAtual === 'humano') {
            // Lógica existente para humanos
            if (atributoFlexivelEscolhido) {
                const spanAnterior = document.getElementById(atributoFlexivelEscolhido);
                if (spanAnterior) spanAnterior.textContent = parseInt(spanAnterior.textContent) - 2;
            }
            
            const spanNovo = document.getElementById(atributo);
            if (spanNovo) {
                spanNovo.textContent = parseInt(spanNovo.textContent) + 2;
                atributoFlexivelEscolhido = atributo;
            }
        } 
        else if (racaAtual === 'lumas') {
            if (!primeiroAtributoSelecionado) {
                // Primeira seleção para Lumas
                if (atributoFlexivelEscolhido) {
                    const spanAnterior = document.getElementById(atributoFlexivelEscolhido);
                    if (spanAnterior) spanAnterior.textContent = parseInt(spanAnterior.textContent) - 1;
                }
                
                const spanNovo = document.getElementById(atributo);
                if (spanNovo) {
                    spanNovo.textContent = parseInt(spanNovo.textContent) + 1;
                    atributoFlexivelEscolhido = atributo;
                    primeiroAtributoSelecionado = true;
                    
                    // Cria o segundo seletor
                    const segundoSeletorHTML = `
                        <select id="atributo-flexivel2">
                            <option value="" disabled selected>Selecione o segundo atributo</option>
                            ${['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma']
                                .filter(a => a !== atributo)
                                .map(a => `<option value="${a}">${a}</option>`).join('')}
                        </select>
                    `;
                    
                    document.getElementById('segundo-seletor').innerHTML = segundoSeletorHTML;
                    
                    document.getElementById('atributo-flexivel2').addEventListener('change', function() {
                        const atributo2 = this.value;
                        
                        if (atributoFlexivelEscolhido2) {
                            const spanAnterior = document.getElementById(atributoFlexivelEscolhido2);
                            if (spanAnterior) spanAnterior.textContent = parseInt(spanAnterior.textContent) - 1;
                        }
                        
                        const spanNovo = document.getElementById(atributo2);
                        if (spanNovo) {
                            spanNovo.textContent = parseInt(spanNovo.textContent) + 1;
                            atributoFlexivelEscolhido2 = atributo2;
                        }
                    });
                }
            }
        }
    });
}

// Modifique a função esconderSeletorAtributoFlexivel
function esconderSeletorAtributoFlexivel() {
    const seletor = document.getElementById('seletor-flexivel');
    if (seletor) {
        seletor.remove();
        atributoFlexivelEscolhido = null;
        atributoFlexivelEscolhido2 = null;
        primeiroAtributoSelecionado = false; // Reseta o controle
    }
}

// ... (mantenha as outras funções como estão)