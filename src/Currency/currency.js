import { useState } from "react";
import './currency.css';

function Currency() {

    let [val, setval] = useState();


    let [val1, setval1] = useState();
    let [val2, setval2] = useState();
    let [val3, setval3] = useState();
    let [val4, setval4] = useState();
    let [val5, setval5] = useState();

    const EUR = () => {
        setval1(parseInt(val) * 0.85)
        setval2(parseInt(val) * 74.71)
        setval3(parseInt(val) * 292.75)
        setval4(parseInt(val) * 119.53)
        setval5(parseInt(val) * 1.26)
    }

 

    return (
        <>
                <div className="text-center box">
                <h1 className="text-center">Currency</h1>
                    <input type="number" onChange={(e) => { setval(e.target.value) }} placeholder="Enter Currency" className="btn3"></input><br></br>


                    <input type="number"  readOnly value={val1} className="me-3 mt-2 main"></input>
                    <input type="button" value={"URO"}  className="btn2"></input><br></br>  


                    <input type="number" readOnly value={val2} className="me-3 mt-2 main"></input>
                    <input type="button" value={"INR"}  className="btn2"></input><br></br>  

                    <input type="number" readOnly value={val3} className="me-3 mt-2 main"></input>
                    <input type="button" value={"PKR"}  className="btn2"></input><br></br>

                    <input type="number" readOnly value={val4} className="me-3 mt-2 main"></input>
                    <input type="button" value={"NPR"}  className="btn2"></input><br></br>

                    <input type="number" readOnly value={val5} className="me-3 mt-2 main"></input>
                    <input type="button" value={"CAD"}  className="btn2"></input><br></br>

                    <input type="button" value={"Click Me "} onClick={EUR} className="btn3"></input>

                </div>

        </>
    )
}
export default Currency;