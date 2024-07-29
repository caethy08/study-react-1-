import React, {Component} from "react";

class Subject extends Component{
    render(){
        const clickHandler = () => { //clickHandler은 메소드를 가짐
            console.log('두번째 버튼 클릭 성공');
        }

        const keyUpHandler = (e) => {//이벤트가 발생한 정보의 객체를 가진 e. 텍스트 박스의 keyUp  이벤트 핸들러
            console.log('텍스트 키업 이벤트 성공');
            console.log('입력한 값 : ', e.target.value);
        }
        return(
            <header>
                <h1>머리글 : {this.props.title}</h1>
                {this.props.subtitle}

                button 이벤트 : 
                <br/>
                <button onClick={function(){//버튼을 클릭하명 함수가 수행됨
                    this.props.changePage(); //changePage값을 받아옴
                }.bind(this)}>{this.props.subtitle}</button>

                <br/>
                <button onClick={clickHandler}>두번째 버튼</button>

                <br/><br/>
                <input type="text" onKeyUp={keyUpHandler} />
            </header>
        );
    }
}
export default Subject;
