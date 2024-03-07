// 경고메세지 없애는 법 ->  /* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목 , 글제목변경] =  useState(['크러쉬 노래 모음' , '응암 맛집' , ' 송강 필모그래피']);
  let [따봉 , 따봉변경] =  useState(0);
  let [modal, setModal] = useState(false);
  

  //자주 변경 -> state (자동 렌더링 됨)


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      
      {/*  정렬하는 법 ->
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button> */}

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={() => {따봉변경(따봉 + 1)}}>👍</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } <span onClick={() => {
          let copy = [...글제목];
          copy[1] = '송도 맛집';
          글제목변경(copy)}}>(수정)</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
          {setModal(true)}
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
          {
            modal == true ? <Modal/> : ''
          } 

          {/* 
          
          map 함수 활용 -> 
          {
            글제목.map(function(a){
              return(
                <div className='list'>
                  <h4>{ a }</h4>
                  <p>2월 17일 발행</p>
                </div>
              )
            })
          } 
          왼쪽 arry 자료만큼 내부코드 실행해줌
  
          */}
    </div>
  );
}

/*

컴포넌트를 언제 사용하면 좋은가?
1. 반복적인 html 축약할 때
2. 큰 페이지 만들 때
3. 자주 변경되는 것들

*/
function Modal(){
  return(
    <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세 내용</p>
    </div>
  )
}




export default App;
