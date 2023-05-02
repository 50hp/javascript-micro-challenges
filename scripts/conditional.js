function biggerNumber(input1, input2){
    if (input1 > input2){
        return'The first number was bigger';
    }else if ( input1 < input2 ){
        return 'The second number was bigger';
    }else{
        return 'The numbers are equal';
    }
}

console.log(biggerNumber(6,5));


result = biggerNumber(7, 7);
console.log(result);

result = biggerNumber(2, 7)
console.log(result);

result = biggerNumber(3, 2)
console.log(result);


