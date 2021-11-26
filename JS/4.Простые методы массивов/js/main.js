// Методы массива
// (A, C, G, T)

// метод push добавляет элемент конце массива
// let bookShelf = [1, 2, 3, 4];
// bookShelf.push(5);
// console.log(bookShelf);

// метод pop удаляет элемент конце массива
// но и возвращает удаленый элемент в который 
// может помешон в другой элемент
// let bookShelf = [1, 2, 3, 4];
// let popped = bookShelf.pop();
// console.log(bookShelf);  // [1, 2, 3]
// console.log(popped); // 4

// метод unshift добавляет элемент в начале массива
// и можно передать несколько элементов
// let bookShelf = [1, 2, 3, 4];
// bookShelf.unshift(5);
// console.log(bookShelf);

// метод shift удаляет элемент в начале массива 
// и возвращает этот элемент
// let bookShelf = [1, 2, 3, 4];
// let shifted = bookShelf.shift();
// console.log(bookShelf);  // [2, 3, 4]
// console.log(shifted);  // 1

//метод slice
// splice


let person = {
    name: 'Jo',
    age: 20,
    childs: ["Jonaton", 'JoJo', 'Tom', 'Scarlet'],
    clothers: {
        shirt: 'black'
    }
}

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.childs[person.childs.length - 1]);
// console.log(person.clothers.shirt);


// переназначение свойств
// person.age = 45;
// console.log(person.age);

// person.age += 45;
// person.name = 'Naruto';
// console.log(person.name);


// добавления свойств
// person.car = 'Toyota';
// console.log(person);


// удаления свойств
// delete person.childs
// console.log(person);

// delete person.clothers.shirt
// console.log(person);


// правильно 
// const obj = {
//     name: 'Jack'
// }

// obj.name = 'Jonaton';
// obj.age = 25;
// console.log(obj);

//  не правильно 
// const obj = {
//     name: 'Jack'
// }
// obj = {
//     name; 'JoJo'
// }

// let person1 = {
//     name: "Ruslan",
//     age: 22
// }

// let person2 = person1;
// console.log(person1);
// console.log(person2);


// let person1 = {
//     name: "Ruslan",
//     age: 22
// }

// let person2 = person1;
// let person2 = 'Naruto'
// console.log(person1);
// console.log(person2);

// copy - spread operator
// let person2 = {...person1} 
// person2.name = 'Naruto'
// console.log(person1);
// console.log(person2);

// let arr = [1, 2, 3];
// let brr = arr;
// arr[0] = 100;
// console.log(arr, brr);

// let arr = [1, 2, 3];
// // let brr = arr;
// let brr = [...arr]
// arr[0] = 100;
// console.log(arr, brr);


// Arrays
// let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

// length
// console.log(numArr.length);

// доступ к элементам массива 
// console.log(numArr[3]);

// console.log([numArr.length -1]);



const guests = [
    {
        name:'Alice'
    },
    {
        name:'Jo'
    },
    {
        name:'JoJo'
    },
    {
        name:'Rus'
    }
]
let newGuest = {
    name: 'New'
}
// push
guests.push(newGuest)
// console.log(guests);

// pop 
guests.pop()
// console.log(guests);

// как возвращать удаленные элементы
//1. console.log(guests.pop());

// 2.let kickedGuest = guests.pop();
// console.log(kickedGuest);

let importantGuest = {
    name: 'Gats'
}

// unshift
guests.unshift(
    {name: 'Otto'},
    importantGuest,
    {name: 'Fon'});
// console.log(guests);


// shift
// guests.shift();
// console.log();
// console.log(guests);

// как возвращать удаленные элементы
// let kickendGuest2 = guests.shift();
// console.log(kickendGuest2);
// console.log(guests);

//slice
// let a = guests.slice(1, 5)
// console.log(a);
console.log(guests);

//splice
// guests.splice();
// console.log(guests);
// console.log();

// как возвратить удаленный элемент splice
// let fon = guests.splice(1, 1);
// console.log(guests);
// console.log(fon);

// как заменить удаленный элемент splice
// let fon = guests.splice(1, 1, newGuest);
// console.log(guests);
// console.log(fon);
 

// guests.splice(3, 0, newGuest);
// console.log(guests);

// не правильное сортировка
// let arrAge = [3, 90, 17, 55, 66];
// arrAge.sort()
// console.log(arrAge);

// правильное сортировка
// let arrAge = [3, 90, 17, 55, 66];
// arrAge.sort((a, b) => a - b);
// console.log(arrAge);

//сортировка в обратном положении
let arrAge = [3, 90, 17, 55, 66];
arrAge.sort((a, b) => b - a);
console.log(arrAge);