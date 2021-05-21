// Variables--------------------------------------
const currencyEL_one = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEL_two = document.getElementById('currency-two');
const amountEL_two = document.getElementById('amount-two');

const rateEL = document.getElementById('rate');
const swap = document.getElementById('swap');


//Functions-------------------------------------------
// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEL_one.value;
    const currency_two = currencyEL_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/a0ae589d959d0727247f6e10/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currency_two];


        rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountEL_two.value = (amountEL_one.value * rate).toFixed(2);

        
    })

}



// Event Listeners-----------------------------------
currencyEL_one.addEventListener('change', calculate)
amountEL_one.addEventListener('input', calculate)
currencyEL_two.addEventListener('change', calculate)
amountEL_two.addEventListener('input', calculate)

swap.addEventListener('click', () =>{
    const temp = currencyEL_one.value;
    currencyEL_one.value = currencyEL_two.value;
    currencyEL_two.value = temp;
    calculate();
} )



calculate();