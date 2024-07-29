import React, {useEffect, useState} from "react";
import '../App.css';
import prc1 from '../prc1.png'; //이미지 읽기
//function HooKTest2(){
// ..
//}

//export default HooKTest2;
//아래와 같이 작성 가능
export default function HooKTest2(){
    const [item, setItem] = useState(0); //동적 박스
    //const a = 1 //정적변수

    const incrementItem = ()  => setItem(item + 1); //incrementItem함수의 주소를 가진 객체
    const decrementItem = ()  => setItem(item - 1);
    
    useEffect(() => {
        let a = 1;
        console.log(a);  // 변수 a 사용
    }, []);
    
    //key:value형식의 json 데이터
    let st = {color:'blue', textAlign:'center', fontSize:'30pt'};

    /*여긴 jsx문법 적용 영역*/
    return(
            <div className='App'>
                <div>
                    number : {item}&nbsp;
                    <button onClick={incrementItem}>증가</button>&nbsp;
                    <button onClick={decrementItem}>감소</button>
                </div>
                {/* css style 적용 : style 속성 값은 {key:'value'} 안에 적음 */}
                <h1 className="blackbar">리액트의 이해</h1>
                <h2 style={{color: 'red'}}>ECMA에 대한 선행 학습 필요</h2>
                <h3 style={st}>css 적용 방식에 대한 이해</h3>

                 {/*이미지 적용 1 : src 폴더 내 파일 */}
                 <div>
                    <img src={prc1} alt='첫번째 이미지' />
                </div>
                {/*이미지 적용 2 : css 파일의 background-img */}
                <div className='img_bg'><br /><br /><br /><br /><br /><br />
                </div> 
                {/*이미지 적용 3 : public 폴더의 파일 */}
                <img src={`${process.env.PUBLIC_URL}/imgs/prc3.png`} alt="public폴더 이미지 읽기" />
            </div>

               

    );
}


