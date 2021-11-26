import React, { useState } from 'react';

function getInitialState(){
    console.log('******');
    return new Date().getDate()
}

const Counter = () => {
  const [counter, setCounter] = useState(() => getInitialState())
const [person, setPerson] = useState({
    name: 'Jo',
    lastName: 'otto'
})
  
   function increment(){
    setCounter((prevState) => prevState + 1)
    setCounter((prevState) => prevState + 1)

   }

   function decrement(){
       setCounter(counter - 1)
   }
   
   function changePerson(){
       setPerson((prev) => {
           return {
               ...prev,
               name: 'Naruto'
           }

       })
   }

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">+</button>
            <button onClick={decrement} className="btn btn-danger">-</button>
            <button onClick={changePerson} className="btn btn-warning">Изменить имя</button>
            <p>{JSON.stringify(person)}</p>
        </div>
    );
};

export default Counter;