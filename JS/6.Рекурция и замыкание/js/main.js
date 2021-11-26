// Рекурция-это вызов функций самой себя

// Замыкание-это когда функция внутри себя 
// возвращает дочернюю функция


// Замыкание

// через глобальную переменную
// let count = 0;
// function counter(){
//     count++
//     return count
// }
// counter();
// counter();
// console.log(counter);


// function counter(){
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
// }
// let first = counter();
// first();
// first();
// console.log(first());


// function counter(){
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
// }
// let first = counter();
// first();
// first();
// console.log(first());


// function counter(){
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
// }
// let first = counter();
// first();
// first();
// console.log(first());


// let second = counter()
// second();
// console.log(second());;

// let third = counter()
// console.log(third());

// Рекурция

// let x = 0;
// function rec(){
//     if(x <= 10){
//         console.log(x++);  // 11s
//         rec()
//     }
// }
// rec()


// let arrNums = [1, 2, 3, 4];
// function rec(arr, sum){
//     sum += arr.shift();
//     if(arr.length != 0){
//         sum = rec(arr, sum)
//     }
//     return sum
// }
// console.log(rec(arrNums, 0));


// let arrNums = [1, 2, 3, 4];
// let i = 0;
// function rec(arr, sum){
//     i++
//     console.log(`Функция ${i} началось`);
//     sum += arr.shift();
//     if(arr.length != 0){
//         sum = rec(arr, sum)
//     }
//     console.log(`Функция ${i} завершилось`);
//     i--
//     return sum
// }
// console.log(rec(arrNums, 0));


let arrNums = [1, 2, 3, 4];
let sum = 0
for(let i = 0; i < arrNums.length; i++){
    console.log(`${i} Круг`);
    sum += arrNums[i]
}
console.log(sum);