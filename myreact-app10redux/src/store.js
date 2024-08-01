import { legacy_createStore as createStore } from "redux";


//리듀서 함수: 애프릴케이션 상태를 변환하는 함수: A상태 -> B상태
//state와 action을 전달받아 상태를 변환 후 반환한다.
//용도 1: action 타입 분석
//용도 2: 이전 상태를 다음 상태로 교체
//용도 3: 교체된 상태를 반환

//createStore(리듀서 함수)
export default createStore(function(state, action){
    //state : 데이터
    //action : 데이터에 가해지는 행위
    if(state === undefined){
        return {number:0} // number 초기화
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    }
    return state;
    //store생성 후 state값 반환
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

//createStore 두번째 매개변수는 REDUX_DEVTOOLS를 사용하기 위한 지정값이다. 