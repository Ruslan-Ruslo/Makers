// 1.Логический оператор &&
// console.log(true && false);
// console.log(true && true);


// 2.Логический оператор ||
// console.log(true || false);
// console.log(false || false);
// console.log(true || true);


// 3.Логический оператор !
// console.log(!true);


// true || false && true;
// true || false;
// true



// true && (false || (true || false))
// true && (false || true);
// true && true;
// true;

// Виды условных операторов

// 1.if...else
// 2.swicth...case
// 3.Тернарный оператор


// 1.if...else
// let response = prompt('How old are you?');
// if(response >= 18){
//     alert('Welcome')
// }else{
//     alert('Fakyu')
// }

// let response = prompt('How old are you?'); // 16
// if(response >= 18){  // false
//     alert('Welcome')
// }else if (confirm('Do your parents allow?')){  //true
//    alert("OKEY")
// }else{
//     alert('Fakyu')
// }

// let age = prompt('Enter your age');
// if(age > 18){
//      alert('Welcome')
// }else{
//     alert("Fakyu")
// }


// let age = prompt('Enter your age');
// let name = prompt('Enter your name').toLowerCase(); //jo => Jo
// if(age >= 18 && name === 'jo'){
//      alert('Welcome, Jo!')
// }else if(age >=18){
//     alert('Fakyu')
// }else{
//     alert('FakYu')
// }



// 2.switch..case
// let sum = 5 + 1;
// switch(sum){
//     case 6: alert('Мало')
//     break
//     case 7: alert('Неправильно')
//     break
//     case 8: alert('Правильно')
//     break
//     case 9: alert('Слишком много')
//     break
//     default: alert('Нет такого значения')
// }


// let age = +prompt('Enter your age');
// console.log(typeof age);
// switch(age){
//     case 15: alert('Watch Luntik')
//     break;
//     case 18: alert('Watch Naruto')
//     break;
//     case 20: alert('Watch Berserk')
//     break;
//     default: alert('watch Harry Potter')
// }



// let age = parseInt(prompt('Enter your age'));
// console.log(age);
// switch(age){
//     case 15: alert('Watch Luntik')
//     break;
//     case 18: alert('Watch Naruto')
//     break;
//     case 20: alert('Watch Berserk')
//     break;
//     default: alert('watch Harry Potter')
// }



// 3.Тернарный оператор
// let age = prompt('Enter your age');
// age >= 18 ? alert('Allowed') : alert('Forbidden');


// let a = 5;
// if(a > 5){
//     a += 5
//     // a = a + 5
// }else{
//     a -= 2
//     // a = a - 2
// }
// console.log(a);


let a = 5;
a >= 5 ? a+= 5 : a-= 2;
console.log(a);