import {useState} from "react";
export const Counter =() => {
    //let count = 0;
    const [count,setCount]=useState(0);
    const handleClick = () => {
       // count++;
       setCount(count+1);
        console.log(count);

    }
    return(<> <h1>{count}</h1>

    <button onClick={handleClick}>Increment</button></>)
}
