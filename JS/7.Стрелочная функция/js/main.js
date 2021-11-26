// Стрелочная функция - это новая
// синтаксис написание функций в JS

// 1.Нет ключевого слово function:
// вместо этого используется
// FAT Function(=>)

// 2.Нет такого обьекта,как arguments

// Синтаксис Arrow Function
// let arrowFunc = (params) => {
    // body
// };

// однострочный синтаксис
// let arrowFunc = (a, b) => a + b;

// с одним аргументом
// let arrowFunc = a => console.log(a);


//Методы-функций внури обьектов,
//которые выполняют определенные 
// 



// let arrowFunc = () => {
//     console.log('Hello World');
// }
// arrowFunc()


// let arrowFunc = () => console.log('Hello World!');
// arrowFunc()


// let arrowFunc = (arg1, arg2) => {
//     return arg1 + arg2
// }
// console.log(arrowFunc(7, 8));


// let arrowFunc = (arg1, arg2) => arg1 + arg2
// console.log(arrowFunc(7, 8));


// let arrowFunc = arg1 => console.log(arg1);
// arrowFunc(5)


// let arrowFunc = ( arg1, arg2, arg3) => {
//     console.log();
// }


// function arrowFunc(arg1, arg2, arg3){
//     console.log(...arguments);
// }
// arrowFunc(true, 23, 'Jo')


// arguments не будет работат в arrowFunc
// let arrowFunc(arg1, arg2, arg3){
//     console.log(...arguments);
// }
// arrowFunc(true, 23, 'Jo')


// objectb methods 

// let person = {
//     name: 'Jo',
//     age: 22,
    
//     sayHello(){
//         console.log('Ruslan');

//     },

//     sayName: function(){
//         console.log('my name is Ruslan');
//     },

//     sayAge: () => console.log('I am 18 y.o.')

// }
// console.log(person.age);
// person.sayHello()
// person.sayName()
// person.sayAge()


// let person = {
//     name: 'Jo',
//     age: 22,
    
//     sayHello(){
//         console.log('Ruslan');

//     },

//     sayName: function(){
//         console.log(`my name is ${this.name}`);
//     },

//     sayAge: function(){
//         console.log(`I am ${this.age} y.o`);
//     }

// }
// // console.log(person.age);
// // person.sayHello()
// person.sayName()
// person.sayAge()



// // let person2 ={...person};
// // console.log(person2);



// let person2 = {...person};
// person2.name = 'Li';
// person2.age = 42;
// person2.sayName()
// person2.sayAge()


// let obj1 = {
//     name: 'Jo',
//     age: 20,
//     obj2: {
//         name: 'JoJo',
//         sayName: () => {
//             console.log(`${this.name}`);
//         }
//     }
// }
// obj1.obj2.sayName()


// alert('qwerty');
// console.log(this);
// window.alert('hello')


let obj1 = {
    alert(a){
        console.log(a + 'OBJ1');
    },
    hello: function(){
        let obj2 ={
            alert(a){
                console.log(a + 'OBJ2');
            },
            hello2: function(){
                this.alert('ALERT')
            }
        }
        obj2.hello2()
    }
}
obj1.hello()