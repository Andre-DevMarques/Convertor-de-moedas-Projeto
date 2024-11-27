let convertButton = document.querySelector("#convert-Button");
let selecionaMoedaSuperior = document.querySelector("#selecionar-moeda-superior");
let selecionaMoedaInferior = document.querySelector("#selecionar-moeda-infeior");

// Função para buscar taxas de câmbio
async function fetchTaxasDeCambio() {
    const url = `https://api.exchangerate-api.com/v4/latest/${selecionaMoedaSuperior.value}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.rates;
    } catch (error) {
        alert("Erro ao buscar taxas de câmbio. Tente novamente mais tarde.");
        console.error(error);
        return null;
    }
}

// Função para converter os valores
async function convertValores() {
    let inputCurrencyValue = document.querySelector("#input-currency").value;
    inputCurrencyValue = parseFloat(inputCurrencyValue.replace(",", "."));

    if (isNaN(inputCurrencyValue)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    let valorParaConverter = document.querySelector(".ValorConverter");
    let valorConvertido = document.querySelector(".Valorconvertido");

    // Busca as taxas de câmbio
    const taxas = await fetchTaxasDeCambio();
    if (!taxas) return;

    let moedaInferior = selecionaMoedaInferior.value;
    let taxaDeCambio = taxas[moedaInferior];

    // Realiza a conversão
    let valorEmMoedaInferior = (inputCurrencyValue * taxaDeCambio).toFixed(2);

    // Atualiza o valor convertido na tela
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: moedaInferior
    }).format(valorEmMoedaInferior);

    // Atualiza o valor que está sendo convertido
    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: selecionaMoedaSuperior.value
    }).format(inputCurrencyValue);
}

// Função para atualizar bandeiras e nomes das moedas
function trocarMoeda() {
    let moedaNomeSuperior = document.querySelector("#moeda-nome-superior");
    let moedaBandeiraSuperior = document.querySelector("#Bandeira-superior");
    let moedaNomeInferior = document.querySelector("#moeda-logo-final");
    let moedaBandeiraInferior = document.querySelector("#america-Bandeira");

    moedaNomeSuperior.innerHTML = selecionarNomeMoeda(selecionaMoedaSuperior.value);
    moedaBandeiraSuperior.src = selecionarBandeira(selecionaMoedaSuperior.value);
    moedaNomeInferior.innerHTML = selecionarNomeMoeda(selecionaMoedaInferior.value);
    moedaBandeiraInferior.src = selecionarBandeira(selecionaMoedaInferior.value);

    convertValores();
}

// Funções auxiliares para nomes e bandeiras
function selecionarNomeMoeda(moeda) {
    const nomes = {
        BRL: "Real",
        USD: "Dólar americano",
        EUR: "Euro",
        GBP: "Libra",
        BTC: "Bitcoin"
    };
    return nomes[moeda];
}

function selecionarBandeira(moeda) {
    const bandeiras = {
        BRL: "../assets/real.png",
        USD: "../assets/dolar.png",
        EUR: "../assets/euro.png",
        GBP: "../assets/libra.png",
        BTC: "../assets/bitcoin.png"
    };
    return bandeiras[moeda];
}

// Adicionando os eventos
convertButton.addEventListener("click", convertValores);
selecionaMoedaSuperior.addEventListener("change", trocarMoeda);
selecionaMoedaInferior.addEventListener("change", trocarMoeda);
