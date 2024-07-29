import React, {useState} from "react";


//Hook : class를 사용하지 않고 function으로 상태값(state)과 생명주기 기능을 사용 가능.
//함수형 컴포넌트로 상태값 접근과 자식 요소에 접근이 가능

//function HooKTest(){
//}

//화살표 함수를 이용. 위와 동일
const HooKTest = () => {
    //형식: const [state, set state] = useState(initialState)
    //      const [데이터, 데이터 변경함수] = useState(초기값)
    const [count, setCount] = useState(0);

    return(
        <div>
        number : {count} &nbsp;
        <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    );
};

export default HooKTest;