const result = document.getElementById("result").value;
const amount = document.getElementById('amount').value;
const fromCurrency = document.getElementById('fromCurrency').value;
const toCurrency = document.getElementById('toCurrency').value;

function convertCurrency() {
    const exchangeRate = 1.2;

    const result = amount * exchangeRate;
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}