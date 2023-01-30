let minimumval = parseInt(prompt('inserisci un valore minimo'));

let maximumval = parseInt(prompt('inserisci un valore massimo'));

while(isNaN(minimumval) && isNaN(maximumval) || minimumval >= maximumval){

    minimumval =  parseInt(prompt('inserisci un valore minimo coretto'));

    maximumval =  parseInt(prompt('inserisci un valore massimo coretto'));
}

const randomnumber = Math.floor(Math.random()* maximumval) + minimumval;

document.getElementById('random').innerHTML = randomnumber;