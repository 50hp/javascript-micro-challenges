function arrayAddition(arrayArray){
let sum = 0

    for (let x of arrayArray){

        for ( let y of x){
            sum += y;
            // console.log(sum);
        }

    }

    return sum;
}






result = arrayAddition([ [1, 2], [3, 4, 5] ]);
console.log(result);





result = arrayAddition([ [1, 2], [3, 4, 5], [6] ]);
console.log(result);