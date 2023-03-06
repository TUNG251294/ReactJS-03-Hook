import { useState} from "react";

function Count(){
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    return(
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increase</button>
        </div>
    );
}
export default Count;