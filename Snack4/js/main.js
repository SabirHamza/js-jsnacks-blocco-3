const userlist = [];

const seconduserlist = [];

let usernumber = parseInt(prompt('inserisci un numero'));

userlist.push(usernumber);

let secondusernumber = parseInt(prompt('inserisci un numero più grande'));

seconduserlist.push(secondusernumber);

while(usernumber >= secondusernumber || isNaN(usernumber) || isNaN(secondusernumber)){

    usernumber = parseInt(prompt('inserisci un numero'));
    
    secondusernumber = parseInt(prompt('inserisci un numero più grande'));

    userlist.push(usernumber);

    seconduserlist.push(secondusernumber);
}

console.log(usernumber);

console.log(secondusernumber);

console.log(userlist);

console.log(seconduserlist);