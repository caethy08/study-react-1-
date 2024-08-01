import React, { Component } from 'react';
import store from '../store';

export default class AddNumber extends Component{
    state = {size:1}
//addnumber에 state값을 넣고 state의 변수는 sizes. 변환도니 값을 숫자로 변경하고 사이즈에 넣는다. 그리고 setstate에 부여해 스테이트 값이 변경
    render() {
        return (
            <div>
                <h1>Add Number</h1>
                {/*버튼을 클릭하면 size값이 상위 컴포넌트(this.props.onclick)로 전달될 수 있게 온클릭 메소드를 구현한다.*/}
                {/*props를 통해 전달받은 onclick메소드를 호출하고 현재 컴포넌트의 state인 size값도 전달한다
                    onclick 함수는 addNumberSuper에서 작성해 준다
                */}
                {/*
                <input type='button' value="+" onClick={function(){
                    this.props.onClick(this.state.size)
                }.bind(this)}></input>
                */}
                
                {/*redux 사용  action에 전달할때는 dispatch 사용*/}
                <input type='button' value="+" onClick={function(){
                    store.dispatch({type:'INCREMENT', size:this.state.size});
                }.bind(this)}></input>

                <input type='text' value={this.state.size} onChange={function(e){
                    this.setState({size:Number(e.target.value)})
                }.bind(this)}></input>
            </div>
        );
    }
};