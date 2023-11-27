import React, { useState } from "react";



const Counter = () => {


    // const buttonClick = (countNum) => {
    //     setCount((prevCount) => prevCount + countNum);
    // };
    
    const changeCountByBtn = (x) => setCount(count +x);
    

    const [count, setCount] = useState(0);
        return (
        <>
            <h2>Counter: {count}</h2>
            
            <button onClick={() => changeCountByBtn(-1)}>Decrement -1</button>
            <button onClick={() => changeCountByBtn(+1)}>Increment +1</button>
            <button onClick={() => setCount(count-10)}>Decrement -10</button>
            <button onClick={() => changeCountByBtn(+10)}>Increment +10</button>
        </>
    );
}

export default Counter;