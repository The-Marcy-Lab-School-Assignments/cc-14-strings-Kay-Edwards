//write your code here
function stripUpperCase(string){
    let newString="";
    for(let i =0; i < string.length; i++){
        let letter = string[i];
        if (letter.toLowerCase() === letter ){
            newString += letter;
        }
             
    }
    
    return newString;
}

console.log(stripUpperCase('Hello!')); // 'ello!'
console.log(stripUpperCase('SevenEleven')); // 'evenleven'
console.log(stripUpperCase("Don't play with Me!")); // 'ont play with e!'