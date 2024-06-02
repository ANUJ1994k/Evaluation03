
const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];

function extractSubArray(animals){
    let newarray=animals.slice(3,7);
    return newarray;
}

let newarray=extractSubArray(animals);
console.log(newarray);
