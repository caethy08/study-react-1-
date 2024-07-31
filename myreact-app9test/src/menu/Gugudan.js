import React, { useState } from "react";

//구구단 
const Output = ({dan}) => {
    const num = [1,2,3,4,5,6,7,8,9];
    return (
        <div>
            {num.map((n) => (
                <p>
                    {dan} * {n} = {dan * n}
                </p>
            ))}
        </div>
    );

}
//main
const Gugudan = () => {
    
    const[dan, setDan] = useState('');

    const outputDan = (e) => {
        setDan(e.target.dan)
    }

    const danSubmit = (e) => {
        e.preventDefault();
        const {dan} = FormData;
        if(!Number(dan) || isNaN(Number(dan))){ //나이 입력 자료 검사
            alert('나이는 숫자로 입력하시오');
        }else{
            
        }
    }
    return(
        <div>
            <form onSubmit={danSubmit}>

            <label for="dan">단 입력: </label>
            <input type="text" value={dan} id="dan" onChange={outputDan}/>
            <button type="submit">확인</button>
            &nbsp;&nbsp;
            <Output/>
            </form>
        </div>
    )
}

export default Gugudan;