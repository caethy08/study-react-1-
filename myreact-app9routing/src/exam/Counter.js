import React, {useState} from "react";
//함수형에는 기본적으로 usestate사용
const Counter = () => {
    const [member, setMember] = useState(0);

    const increase = () => {
        setMember(member + 1);
    }

    const decrease = () => {
        setMember(member - 1);
    }
//-----위는 js, 아래는 jxp :jxp에서 js를 쓸 때는 {}안에 넣고 쓸 것
    return(
        <div>
            <br/><br/>
            <button onClick={increase}>친구 추가</button>
            &nbsp;&nbsp;
            <button onClick={decrease}>친구 삭제</button>
            <p>친구 수는 {member}</p>
        </div>
    );
}

export default Counter;