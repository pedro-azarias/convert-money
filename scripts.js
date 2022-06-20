const button = document.querySelector('button')
const realValue = document.getElementById('real-value')
const currencyValue = document.getElementById('currency-value')
const dolar = 4.7
const euro = 5.08
const select = document.getElementById('currency-select')
const currencyImage = document.getElementById('currency-img')
const currencyName = document.getElementById('currency-name')

const convertValues = () => {
    const input = document.getElementById('input-real').value

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(input)
    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar'
        currencyImage.src = './assets/estados-unidos (1) 1.png'
        currencyValue.innerHTML = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(input / dolar)
    }
    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(input / euro)
    }

}

button.addEventListener('click', convertValues)