// let year = 2023;
// let dateOfBirth = 2001;

// let age1 = "I am Esmtullah a " + (year - dateOfBirth) + " years old!";
// console.log(age1);

// let age = `I am Esmatullah a ${year - dateOfBirth} years old`;
// console.log(age);


// Array Operation or Methods

// const dudes = ['Esmatullah', 'Shafiqa', 'Haida'];
// console.log(dudes);
// let firstWay = [];

// const ages = new Array(2000, 2001, 20004);
// console.log(ages);

// let numbers  = new Array();
// numbers[0] = 1000;
// console.log(numbers);

// firstWay[0] = 5000;
// console.log(firstWay);

// // Array based indexes Esmatullah, Shafiqa,
// console.log(dudes)

const friends = ['Esmatullah', 'Shafiqa', 'Hadia'];
// console.log(friends);

//We talk about some important Array methods
// 1. the push() method that is used to add and array element at the end

// friends.push('Marwa');
// const ret = friends.unshift('Marwa');
// const ret = friends.shift();
const ret = friends.includes('Marwa');
console.log(friends, ret);

const numbers = [12, 23, 50, 90, 100, 999, 1000, 987, 682];
const odd = [];
const even = new Array();

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        even.push(numbers[i]);
    }
    else {
        odd.push(numbers[i]);
    }
}

console.log(even, odd);
