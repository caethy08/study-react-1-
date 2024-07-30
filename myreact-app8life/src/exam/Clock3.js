import { useState, useEffect } from "react";

const Clock3 = () => {
    //useState로 state를 초기화
    const [date, setDate] = useState(new Date());

    //useEffect를 사용하면 내부적으로 생명주기 메소드가 처리됨
    useEffect(() => {
        //클래스의 componentDidMount()를 아래처럼 기술
        const timerID = setInterval(() => showSigan(), 1000)

        //클래스의 componentWillUnMount()를 아래처럼 기술
        return () => {
            clearInterval(timerID);
        };
    }, []); //useeffect는 배열이 필요

    const showSigan = () => {
        setDate( //date를 수정할 수 있는 
            new Date());
        }

    return(
        <div>
              <h1>Hi</h1>
            <h2>지금은 {new Date().toLocaleTimeString()}</h2>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock3;
          