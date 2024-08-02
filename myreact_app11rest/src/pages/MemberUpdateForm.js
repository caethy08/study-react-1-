import axios from "axios";
import { useState, useEffect} from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm(){
    //"/members/:num/edit" num 값 읽기
    const {num} = useParams();

    //수정할 정보 state로 관리
    const [state, setState] = useState({

        num:0,
        name:"",
        addr:""   
    });

    useEffect (() => {
        //Ajax요청 (Get 방식) 설정
        axios.get("/members" + num)
        .then(res => {
            //서버로부터 응답된 데이터를 이용해서 state를 수정
            //res.data는 {num:1, name:'공기밥', addr:'강남구'}
            setState(res.data)
        })
        .catch(error =>{
            console.log(error);
        })
    }, [num])

    //json타입으로 변환
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const Navigate = useNavigate();
    
    //수정 버튼 클릭에 대한 이벤트 핸들러
    const handleSave = () => {
        //Ajax요청 (Put 방식) 설정
        axios.put("/members/" + num, state)
        .then(res => {
                Navigate("/members"); //수정 후 목록보기
            }
        )
        .catch(error =>{
            console.log(error);
        })
    }

    return(
        <>
            <h2>회원정보 수정</h2>
            <div>
                <label>이름: </label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div>
                <label>주소: </label>
                <input type="text" name="addr" onChange={handleChange} />
            </div>
            <button onClick={handleSave}>수정 확인</button>
        </>
    )
}