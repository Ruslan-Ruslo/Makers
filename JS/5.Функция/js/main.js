// Функция-это механизм для многократного
// использования определленной части кода
// DRY(Don't repeat yourself)

// Функция show что-то показывает
// function show(){
//     console.log('I am showing something');
// }

// Функция get возвращает значения
// function get(){
//     console.log('I can get you anything');
// }

// Функция calc вышитывает
// function calc(){
//     console.log('I can calculate someding');
// }

// Функция create создает
// function create(){
//     console.log('I can create anything');
// }

// Функция cheak вышитывают
// function cheak(){
//     console.log('I am a cheking function');
// }

// В языке JS существует 3 вида функций
// 1.Function declaration(именуемая функция)
// 2.Function expression(анонимная функция)
// 3. Arrow function(стрелочная функция)


// Function declation syntax
// function functionName(params){
//     body
// };

// functionName() // вызов функций


// Function expression syntax
// const func = function(params){
//     body
// }
// func() // вызов

// Function expression exapmle
// const sum = function(a, b){
//     console.log(a + b);
// };

// sum(2, 6) // вызов функций

// function expression
// const sum2 = function(a, b){
//     console.log(a + b);
// };

// sum2(2, 6) вызов функций

// Параметры-это выходные данные для функций

// Языке JavaScript выделяют 
// 2 области видимости
// 1.Глобальная
// 2.Локальная


// 1.Область за пределами всех
// функций считается глобальной областью

// Хойстинг - это процесс поднятия 
// наших переменных и функций 
// в самый вверх кода и работают только
// с var и function declaration



// 1.
//Обявления функций Function Decloration
// function showMessage(message){
//     console.log(message);
// }
//  showMessage('Ruslan');
//  showMessage('Jo');
//  showMessage('Otto');

 // 2.
//  function calcMultiply(a, b){
//      return a * b
//  }
//  let result = calcMultiply(5, 6);
//  console.log(result);
 
// let result = calcMultiply(5, 6);
// console.log(result);

//  function calcMultiply(a, b){
//     return a * b
// }

// Обявления функций Function Exprassion
// 1.
// let showMessage = function(message){
//     console.log(message);
// }
// showMessage('Ruslan')


// 2.
// let calcMultiply = function(a, b){
//     return a * b
// }
// console.log(calcMultiply(2, 7));


// var calcMultiply = function(a, b){
//     return a * b
// }
// console.log(calcMultiply(2, 7));


// Hoisting
// console.log(a);
// console.log(b);
// var a = 'Ruslan'; // Hoisting на var работает
// let b = 'Jo'// Hoisting нв let не работает


// scope 
// function counter(){
//     let count = 0;
//     count++
//     console.log(count);
// }
// counter();
// counter();
// counter()


// let count = 0; // 1 -> 2 -> 3
// function counter(){
//     count++
//     console.log(count);
// }
// counter();
// counter();
// counter()

// правильно 
// function counter(){
//     let count = 10;
//     console.log(count);
// }
// counter()

// не правильно
// function counter(){
//     let count = 10;
// }
// console.log(count);
// counter()


// let personName = 'Ruslan';
// function func(){
//     let personName = 'Jo';
//     function func2(){
//         let personName = 'Hoho';
//         console.log(personName);
//     }
//     func2()
// }
// func()


// function checkSum(){
//     let a = +prompt('Enter first number');
//     let b = +prompt('Enter second number');

//     let sum = a + b;

//     if(sum === 15){
//         alert('Summa ravna 15')
//     }else if(sum < 15){
//         alert('Summa menshe 15')
//     }else{
//         alert('Summa bolshe 15')
//     }
// }
// checkSum()


// function someFunc(){
//     console.log('Hello World');
// }
// let newFunc = someFunc
// console.log(newFunc);


// function calcSum(a, b){
//     return a + b
// }
// console.log(calcSum(2, 7));


// function calcSum(a, b=10){
//     return a + b
// }
// console.log(calcSum(2,));


// function calcSum(a, b=10){
//     console.log(b);
//     return a + b
// }
// // console.log(calcSum(null, 8));
// console.log(calcSum(2, 7));


// function someFunc(a, b, c, d, e){
//     console.log(a, b, c, d, e);
// }
// someFunc('helo', false, 25, [], {});


// function someFunc(a, b, c, d, e){
//   console.log(...arguments);
// }
// someFunc('helo', false, 25, [], {});


// function someFunc(a, b, c, d, e){
//     let arr = [...arguments];
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
//   }
//   someFunc('helo', false, 25, [], {});


  function someFunc(a, b, c, d, e){
    let arr = [...arguments];
    for(i of arr){
        console.log(i);
    }
    }
  someFunc('helo', false, 25, [], {});