import React from 'react';
import './Greet.css'
// 
// const Greet = (props) => {
    // console.log(props.name);
    // return (
            // <div className='greetings'>
            // <h1>JoJo</h1>
        // </div>
    // );
// };
// 
// export default Greet;


// const Greet = (props) => {
    // return (
        // <div className='gretting'>
            // <h1>Hello {props.name} {props.lastName}</h1>
            // {props.children}
        // </div>
    // );
// };

// export default Greet;



const Greet = (props) => {
    props.getData('hello')
    return (
        <input 
        onChange={(e) => {
          props.getData(e.target.value)
        }}
        type='text'
        
        />
    );
};
export default Greet;