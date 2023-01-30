const mynumber =  Math.floor(Math.random()* 100)+ 1;

let usernumber;

while(mynumber != usernumber){

    usernumber = parseInt(prompt('inserisci un numero'));

    if(mynumber > usernumber){

       alert('il numero inserito è minore');

    }else if(mynumber < usernumber){

        alert('il numero inserito è maggiore');
    
    }else if(mynumber == usernumber){

        document.getElementById('text').innerHTML = ('Congratulazioni hai indovinato'); 
    }
}

console.log(mynumber);

console.log(usernumber);