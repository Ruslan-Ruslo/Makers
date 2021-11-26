// class Person {
//     constructor(name, surname, age) {
//         this.name = name
//         this.surname = surname
//         this.age = age
//         this.#inn = inn
//     }
//     #inn

//     sayHello = (){
//         console.log(`Hello my name is ${this.name}`);
//     }

//     get getInn() {
//         return this.#inn
//     }

//     set setAge(age) {
//     this.age = age 

//     }

//     static myMethob(){
//         console.log("Static methob is called");
//     }
// }


// let person1 = new Person("Leon", "Kennedy", 30, 12345)
// let person2 = new Person();

// // person1.sayHello();
// // console.log(person1.getInn);
// // person1.setAge = 3;
// // console.log(person1.age);
// // Person.myMethob();

// // console.log(person2);



// class Worker extends Person {
//     constructor(name, surname, age, inn, phoneNumber){
//         super(nmae, surname, age, inn)
//         this.phoneNumber = phoneNumber
//     }
// }


// let worker = new Worker("Chris", "Otto", "30", 2343546567, 123456,)
// console.log(worker);


class RickAndMortyRequests {
    createRickAndMortyCards() {
        fetch(API)
        .then(res => res.lson())
        .then(data => console.log(data))
    }
}

let obj1 = new RickAndMortyRequests();
obj1.createRickAndMortyCards();