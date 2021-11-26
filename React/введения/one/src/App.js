// import logo from './logo.svg';
import './App.css';
// import React from 'react';


// 1
// function App() {
  //  return ( 
    //  <div>
    //  <h1>JoJo</h1>
    //  <h2>Naruto</h2>
    //  </div>
  //  )
// }

// export default App;


// 2
// function App() {
  // return React.createElement('div', null, React.createElement('h1', null, 'JoJo'))
// }
// export default App;


// 3
// function App() {

  // return React.createElement(
    // 'div',
    // {id: 'makers', className: 'Naruto'},
    // React.createElement('h1', null, 'Not'))
  // 
// }
// export default App;


import React from 'react';
import Greet from './conponents/Greet/Greet';

// const App = () => {
  // return (
    // <div>
      // <Greet name='Jo' lastName='Jo'>
        // <button>Like</button>
      // </Greet>
      // <Greet name='otto' lastName='Fin'>
        // <p>FullStack developer</p>
        // </Greet>
      // <Greet name='ruslo' lastName='rus'/>
    // </div>
  // );
// };

// export default App;



const App = () => {
  const getData = (value) => {
    console.log(value);
  }
  return (
    <div>
      <Greet getData={getData}/>
      
    </div>
  );
};
export default App;









