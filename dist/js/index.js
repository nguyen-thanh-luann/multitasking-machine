
function calcFahrenheit(){
    let cel = document.querySelector('#celsius').value;
    document.querySelector('#fahrenheit').value =  celToFah(cel);
}

function calcCelsius(){
    let fah = document.querySelector('#fahrenheit').value;
    document.querySelector('#celsius').value = fahToCel(fah);
}

function fahToCel(fah){
    return Number.parseFloat((fah - 32) * (5/9)).toFixed(1);
}

function celToFah(cel){
    return Number.parseFloat((cel / (5/9)) + 32).toFixed(1);
}
