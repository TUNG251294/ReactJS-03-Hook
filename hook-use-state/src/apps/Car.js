import {useState, useEffect} from 'react';

function Car(){
    const[branch, setBranch] = useState('A');
    const[selectedCar, setSelectedCar] = useState('');
    const[color, setColor] = useState('1');
    const[selectedColor, setSelectedColor] = useState('');

    const handleModel = (e) => {
        setBranch(e.target.value);
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    useEffect(() => {
        switch(branch){
            case 'A': setSelectedCar('Mercedes');
                break;
            case 'B': setSelectedCar('Ford');
                break;
            case 'C': setSelectedCar('BWM');
                break;  
            default:  
        }
    }, [branch]);

    useEffect(() => {
        switch(color){
            case '1': setSelectedColor('Blue');
                break;
            case '2': setSelectedColor('Brown');
                break; 
            case '3': setSelectedColor('Purple');
                break;      
        }
    }, [color]);

    return(
        <div>
            <h1>Select a car</h1>
                <select onChange={handleModel}>
                    <option value='A'>Mercedes</option>
                    <option value='B'>Ford</option>
                    <option value='C'>BWM</option>
                </select>
            <h1>Select a color</h1>
                <select onChange={handleColor}>
                    <option value='1'>Blue</option>
                    <option value='2'>Brown</option>
                    <option value='3'>Purple</option>
                </select>

            <h1>You selected a {selectedColor} {selectedCar}</h1>
        </div>
    )
}
export default Car;