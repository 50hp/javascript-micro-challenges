function loopsArray( array , number){
    return array.slice(number, (array.length)).join(' ');
}



``

result = loopsArray(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3);
console.log(result);



result = loopsArray(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2);
console.log(result);