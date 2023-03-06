import {useState, useEffect} from "react";

function Timer(){
    const [count, setCount] = useState(5);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        if (count === 0) {
            alert("Finish");
            clearInterval(interval);
        }
        return () => clearInterval(interval);
     }, [count]);

    return(
        <div>
            <h1>Count down from {count}</h1>
        </div>
    );
}
export default Timer;