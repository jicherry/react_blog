import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate , useNavigationType } from 'react-router-dom';

function Login(){

    let [id , setId] = useState('');
    let [password , setPassword] = useState('');
    const navigate = useNavigate();
    const navigationType = useNavigationType();
    /*
    로직 정리
    로그인 버튼을 눌렀을때 아이디와 비밀번호가 존재하는지 체크
    */

    return (
        
        <div className = "page">
            <div className = "contentWrap">
                <div className="inputTitle">
                    <p style={ {marginTop: '75px' , marginRight: '330px' , fontWeight: 'bold'} }>아이디</p>
                </div>
                <div className="inputWrap">
                    <input style={ {width: '380px' , height: '30px'} } 
                    onChange={(e) => setId(e.target.value)}></input>
                </div>
            </div>

            <div className = "contentWrap">
                <div className="inputTitle">
                    <p style={ {marginTop: '25px', marginRight: '320px' , fontWeight: 'bold'} }>비밀번호</p>
                </div>
                <div className="inputWrap">
                    <input style={ {width: '380px' , height: '30px'} }
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            </div>
            <div>
                <button style={ { marginTop: '50px' , borderRadius: '30px' , border:'none' , width: '390px' , height: '30px' , background: 'gainsboro'} } onClick={() => {
                    // 아이디와 비밀번호가 존재하는지 체크
                    if (id == '') {
                        alert('아이디를 입력하셈')
                    } else if (password == '') {
                        alert('비번을 입력하셈')
                    } else {
                        let obj = {login : 'success'}
                        localStorage.setItem('page', JSON.stringify(obj)) // -> JSON 자료로 변환해서
                        navigate("/")
                    }
                }}>확인</button>
            </div>
        
        </div>
    )  
}


export default Login;