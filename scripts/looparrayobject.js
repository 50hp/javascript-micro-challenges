function totalYears( array ){
    let sum = 0
    for (let person of array){
       sum += person.yearsOfExperience;

    }

return sum;

}






result = totalYears([
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 }
]);
console.log(result);




result = totalYears([
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 }
]);
console.log(result);