import React, {useState} from "react";

//member컴포넌트
const Member = ({memberData}) => {
    return(
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.junhwa}</td>
        </tr>
    );
}

//main 컴포넌트
const Multidata = () =>{
    const members = [
        {irum:'관우', junhwa:'111-1111'},
        {irum:'장비', junhwa:'222-2222'},
        {irum:'유비', junhwa:'333-3333'},
    ];

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th><th>전화</th>
                </tr>
            </thead>
            <tbody>
                {/* 배열 랜더링시 각 요소에 고유 key를 추가 */}
                {/*변수 mem을 타고 map이 하나씩 값을 꺼내서 전달함*/}
                {members.map((mem, index) => (
                    <Member key={index} memberData={mem} />
                ))}
            </tbody>
        </table>
    );
}
export default Multidata;