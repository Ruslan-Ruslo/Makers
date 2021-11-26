// Циклы-это такой механизм,
// выполняющий один и тот же
// код заданное количество раз

// Виды Циклов
// 1.for
// 2.whille
// 3.do...while
// 4.for...in
// 5.for...of


// for
// for(let i = 0; i < 3; i++){
//     console.log(i); // 0, 1, 2
// }

// while
// let i = 0;
// while(i < 3){
//     console.log(i); // 0, 1, 2
//     i++
// }

// do...while
// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i < 3)









// 1.for
// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] * 2);
// }


// let data = ['Ruslan', 'Jo', 'Berserk', 'Alucard'];
// for(let i = 0; i < data.length; i++){
//     if(data[i] === 'Jo'){
//         console.log(`${data[i]} not`);
//         // continue
//         // break
//     }
//     console.log(`${data[i]} you`);
// }

// 2.while
// let i = 0;
// while(i < 3){
//     console.log(i);
//     i++
// }


// 3.do..while
// let i = 10;
// do{
//     console.log(i);
// }while(i < 10)

// let y = 10;
// do{
//     console.log(y);
//     y--
// }while(y > 5)



//4.for..in

// let obj = {
//     name: 'Kani',
//     age: 22,
//     isHuman: true,
//     languages: ['Python', 'JavaScript']
// }

// for(i in obj){
//     console.log(obj[i]);
// }   


// 5.for..of
let arr = ['Python', 'JavaScript', 'PHP', 'Java'];
for(i of arr){
    console.log(i);
}