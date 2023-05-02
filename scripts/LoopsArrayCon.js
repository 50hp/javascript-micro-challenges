function loopsArray( array , number){
    let array2 = []
    for (let i = number; i < array.length; i++){
        array2.push(array[i]);
        
    }

return array2.toString();

}





result = loopsArray(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3);
console.log(result);



result = loopsArray(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2);
console.log(result);