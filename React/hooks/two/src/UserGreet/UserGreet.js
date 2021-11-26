import React, { useState } from 'react';

const UserGreet = () => {

    const [islogged, setLog] = useState(true);

    return (
        <div>
            {
                islogged && <h1>Iron</h1>
            }
        </div>
    )




    // return (
        // <div>
            // {
                // isLogged ? <h1>Jo</h1> : <h1>Welcome, JoJo</h1>
            // }
        // </div>
    //  )

//    const [isLogged, setLog] = useState(true);
//    let welcome
//    if(isLogged){
    //    welcome = <h1>Welcome, Ruslan</h1>
//    }else{
    //    welcome = <h1>Welcome, JoJo</h1>
//    }
// 
//    return (
    //    <div>{welcome}</div>
//    )



//    if(isLogged){
    // return (
        // <div>
        //   <h1>One punch</h1>
        // </div>
    // );
// }else{
    // return (
        // <div>
        //   { <h1>Suvorov</h1> }
        // </div>
    // )
//   }  
};

export default UserGreet;