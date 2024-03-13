// 경고메세지 없애는 법 ->  /* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목 , 글제목변경] =  useState(['크러쉬 노래 추천' , '응암 맛집' , '송도 수플레']);
  let [따봉 , 따봉변경] = useState([0 , 0 , 0]); // [따봉]-> state 담긴 내용 의미함 , [따봉변경]-> 따봉 변경할 때 따봉변경()으로 씀
  let [modal , setModal] = useState(false);  
  let [title , setTitle] = useState(0);
  let [입력값 ,  입력값변경] = useState('');

  //자주 변경 -> state (자동 렌더링 됨)


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      
      {/* <div className='list'>
        <h4>{ 글제목[0] } 
        <span onClick={() => {
          따봉변경(따봉 + 1)
        }}> 👍🏻 </span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={() => {
          setModal(!modal)
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}


      { 
        글제목.map(function(a ,i) {   
          return(
            <div className='list'>
              <h4 onClick={() => {
                setModal(!modal); setTitle(i)
              }}>{글제목[i]} <span onClick={(e) => {
                e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}> 👍🏻 </span> {따봉[i]} </h4>
              <p>1월 25일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i , 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

        <input onChange={(e) => { 입력값변경(e.target.value);

        }} />
        <button onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)
        }}>글발행</button>



      {
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경} /> : null
      }

    </div>
  );
}

  function Modal(props) {
    return(
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }





export default App;
