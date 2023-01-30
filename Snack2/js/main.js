let sum = 0;

while(sum < 50){

    usernumber = parseInt(prompt('inserisci un numero'));

    const emptyarray = [];

    emptyarray.push(usernumber);

    for(let i = 0; i < emptyarray.length; i++){
        
        let current = emptyarray[i];
        
        sum += current;
    }
}

console.log(sum);