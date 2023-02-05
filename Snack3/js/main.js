let usernumber;

while(isNaN(usernumber)){
    usernumber = parseInt(prompt("inserisci un numero"))
}

for(let i = 0; i < usernumber; i++){

    let userarray = [];

    console.log(userarray);

    for(let i = 0; i < 10; i++){

        userarray.push(Math.floor(Math.random() * 100) + 1)
    }
}