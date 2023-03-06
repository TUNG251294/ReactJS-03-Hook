import { useState } from "react";
import Content from "../components/Content";

function ShowContentApp(){
    const [show, setShow] = useState(false);

    return(
        <div style={{padding: 20}}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content/>}
        </div>
    );
}
export default ShowContentApp;
// khi click goi 1 hàm gọi method setShow tra ve !show