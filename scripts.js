const button = document.querySelector('button')



const euroComparedToDollar = 1.052 //1 Euro é igual à 1,05 Dólar
const dollarComparedToEuro = 0.9501 // 1 Dólar é igual à 0,95 Euro

const firstSelect = document.getElementById('first-currency-select')
const secondSelect = document.getElementById('second-currency-select')

const firstCurrencyImage = document.getElementById('first-currency-img')
const secondCurrencyImage = document.getElementById('second-currency-img')

const firstCurrencyName = document.getElementById('first-currency-name')
const secondCurrencyName = document.getElementById('second-currency-name')

const firstCurrencyValue = document.getElementById('first-currency-value')
const secondCurrencyValue = document.getElementById('second-currency-value')

const convertValues = async() => {
    const input = document.getElementById('input-real').value
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    firstCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(input)
        // Se o primeiro for dólar e o segundo for real
    if (firstSelect.value === 'US$ Dólar americano' && secondSelect.value === 'R$ Real') {
        firstCurrencyName.innerHTML = 'Dólar'
        firstCurrencyImage.src = './assets/estados-unidos (1) 1.png'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(input)

        secondCurrencyName.innerHTML = 'Real'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(input * dolar)
        secondCurrencyImage.src = './assets/brasil 2.png'
        secondCurrencyValue
    }

    // Se o primeiro for dólar e o segundo for Euro

    if (firstSelect.value === 'US$ Dólar americano' && secondSelect.value === '€ Euro') {
        firstCurrencyName.innerHTML = 'Dólar'
        firstCurrencyImage.src = './assets/estados-unidos (1) 1.png'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(input)

        secondCurrencyName.innerHTML = 'Euro'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(input / euroComparedToDollar)
        secondCurrencyImage.src = './assets/euro.png'
    }

    // Se os dois forem Dólar
    if (firstSelect.value === 'US$ Dólar americano' && secondSelect.value === 'US$ Dólar americano') {
        firstCurrencyName.innerHTML = 'Dólar'
        firstCurrencyImage.src = './assets/estados-unidos (1) 1.png'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(input)

        secondCurrencyName.innerHTML = 'Dólar'
        secondCurrencyImage.src = './assets/estados-unidos (1) 1.png'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(input)

    }

    // Se o primeiro for Euro e o segundo for Dólar
    if (firstSelect.value === '€ Euro' && secondSelect.value === 'US$ Dólar americano') {

        firstCurrencyName.innerHTML = 'Euro'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(input)
        firstCurrencyImage.src = './assets/euro.png'

        secondCurrencyName.innerHTML = 'Dólar'
        secondCurrencyImage.src = './assets/estados-unidos (1) 1.png'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(input / dollarComparedToEuro)

    }

    // Se o primeiro for Euro e o segundo for Real
    if (firstSelect.value === '€ Euro' && secondSelect.value === 'R$ Real') {

        firstCurrencyName.innerHTML = 'Euro'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(input)
        firstCurrencyImage.src = './assets/euro.png'

        secondCurrencyName.innerHTML = 'Real'
        secondCurrencyImage.src = 'assets/brasil 2.png'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(input * euro)
    }

    // Se os dois forem Euro
    if (firstSelect.value === '€ Euro' && secondSelect.value === '€ Euro') {

        firstCurrencyName.innerHTML = 'Euro'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(input)
        firstCurrencyImage.src = './assets/euro.png'

        secondCurrencyName.innerHTML = 'Euro'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(input)
        secondCurrencyImage.src = './assets/euro.png'
    }

    // Se o primeiro for Real e o segundo for Dólar
    if (firstSelect.value === 'R$ Real' && secondSelect.value === 'US$ Dólar americano') {

        firstCurrencyName.innerHTML = 'Real'
        firstCurrencyImage.src = 'assets/brasil 2.png'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(input)


        secondCurrencyName.innerHTML = 'Dólar'
        secondCurrencyImage.src = './assets/estados-unidos (1) 1.png'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(input / dolar)

    }

    // Se o primeiro for Real e o segundo for Euro
    if (firstSelect.value === 'R$ Real' && secondSelect.value === '€ Euro') {

        firstCurrencyName.innerHTML = 'Real'
        firstCurrencyImage.src = 'assets/brasil 2.png'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(input)

        secondCurrencyName.innerHTML = 'Euro'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(input / euro)
        secondCurrencyImage.src = './assets/euro.png'

    }

    // Se os dois forem Real
    if (firstSelect.value === 'R$ Real' && secondSelect.value === 'R$ Real') {

        firstCurrencyName.innerHTML = 'Real'
        firstCurrencyImage.src = 'assets/brasil 2.png'
        firstCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(input)

        secondCurrencyName.innerHTML = 'Real'
        secondCurrencyImage.src = 'assets/brasil 2.png'
        secondCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(input)


    }
}
button.addEventListener('click', convertValues)