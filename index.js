// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
   
  }

  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts (gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log (`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
  }

  wrapGifts(gifts);



function writeCards(names, event){
    let messages = [];
    for (let counter = 0; counter < names.length; counter++){
        messages.push(`Thank you, ${names[counter]}, for the wonderful surprise gift!`);
    }

    return messages;
  }
const namesArray = ["Guadalupe", "Ollie", "Aki"];
const eventName = "Birthday Party";

writeCards(names);



function countDown(number){
    while (number >= 0){
        console.log(number);
        number --;
    }
    }


    