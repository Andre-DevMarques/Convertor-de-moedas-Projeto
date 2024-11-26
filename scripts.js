let convertButton = document.querySelector("#convert-Button")
let selecionaMoeda = document.querySelector("#selecionar-moeda-infeior")
let selecionaMoedaSuperior = document.querySelector("#selecionar-moeda-superior")

convertButton.addEventListener("click", convertValores)

function convertValores() {

    let inputCurrencyValue = document.querySelector("#input-currency").value
    //dentro do input//

    let valorParaConverter = document.querySelector(".ValorConverter")
    let valorConvertido = document.querySelector(".Valorconvertido")
    //esses dois são da parte de baixo

    let realToday = 1
    let euroToday = 6.06
    let dolarToday = 5.80
    let libraToday = 7.29
    let bitcoinToday = 556790.72
    // valor do das moedas

    if (selecionaMoeda.value == "USD") {
        //se o meu select estiver com o valor "USD" ele ira fazer isso
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)

    }

    if (selecionaMoedaSuperior.value == "USD") {
        //se o meu select estiver com o valor "USD" ele ira fazer isso
        valorParaConverter.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)

    }

    if (selecionaMoeda.value == "EUR") {
        //se o meu select estiver com o valor "EUR" ele ira fazer isso

        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)

    }

    if (selecionaMoedaSuperior.value == "EUR") {
        //se o meu select estiver com o valor "EUR" ele ira fazer isso

        valorParaConverter.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)

    }

    if (selecionaMoeda.value == "GBP") {
        //se o meu select estiver com o valor "USD" ele ira fazer isso
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {

            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValue / libraToday)

    }

    if (selecionaMoedaSuperior.value == "GBP") {
        //se o meu select estiver com o valor "USD" ele ira fazer isso
        valorParaConverter.innerHTML = new Intl.NumberFormat("en-GB", {

            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValue / libraToday)

    }

    if (selecionaMoeda.value == "BTC") {
        // Conversão para Bitcoin com precisão de 8 casas decimais
        valorConvertido.innerHTML = (inputCurrencyValue / bitcoinToday).toFixed(8) + " BTC";
    
    }

    if (selecionaMoedaSuperior.value == "BTC") {
        // Conversão para Bitcoin com precisão de 8 casas decimais
        valorParaConverter.innerHTML = (inputCurrencyValue / bitcoinToday).toFixed(8) + " BTC";
    
    }

    if (selecionaMoeda.value == "BRL") {
        //se o meu select estiver com o valor "USD" ele ira fazer isso
        valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue / realToday)
    }    

    if (selecionaMoedaSuperior.value == "BRL") {
        //se o meu select estiver com o valor "USD" ele ira fazer isso
        valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue / realToday)
    }    

}

function trocarMoedaInferior(){
    //aqui é aonde troca o nome e as bandeiras

    let moedaNome = document.querySelector("#moeda-logo-final")
    let moedaBandeira = document.querySelector("#america-Bandeira")

    if (selecionaMoeda.value == "BRL"){

        moedaNome.innerHTML = "Real "
        moedaBandeira.src = "../assets/real.png"

    }

    if (selecionaMoeda.value == "USD"){

        moedaNome.innerHTML = "Dólar americano"
        moedaBandeira.src = "../assets/dolar.png"

    }

    if (selecionaMoeda.value == "EUR"){

        moedaNome.innerHTML = "Euro"
        moedaBandeira.src = "../assets/euro.png"

    }

    if (selecionaMoeda.value == "GBP"){

        moedaNome.innerHTML = "Libra"
        moedaBandeira.src = "../assets/libra.png"

    }

    if (selecionaMoeda.value == "BTC"){

        moedaNome.innerHTML = "Bitcoin"
        moedaBandeira.src = "../assets/bitcoin.png"

    }

    convertValores()
}

selecionaMoeda.addEventListener("change", trocarMoedaInferior)

function trocarMoedaSuperior(){

    let NomeMoedaSuperior = document.querySelector("#moeda-nome-superior")
    let BandeiraMoedaSuperior =document.querySelector("#Bandeira-superior")

    if (selecionaMoedaSuperior.value == "BRL"){

        NomeMoedaSuperior.innerHTML = "Real"
        BandeiraMoedaSuperior.src = "../assets/real.png"

    }


    if (selecionaMoedaSuperior.value == "USD"){

        NomeMoedaSuperior.innerHTML = "Dólar americano"
        BandeiraMoedaSuperior.src = "../assets/dolar.png"

    }

    if (selecionaMoedaSuperior.value == "EUR"){

        NomeMoedaSuperior.innerHTML = "Euro"
        BandeiraMoedaSuperior.src = "../assets/euro.png"

    }

    if (selecionaMoedaSuperior.value == "GBP"){

        NomeMoedaSuperior.innerHTML = "Libra"
        BandeiraMoedaSuperior.src = "../assets/libra.png"

    }

    if (selecionaMoedaSuperior.value == "BTC"){

        NomeMoedaSuperior.innerHTML = "Bitcoin"
        BandeiraMoedaSuperior.src = "../assets/bitcoin.png"

    }

    convertValores()

}

selecionaMoedaSuperior.addEventListener("change", trocarMoedaSuperior)    
