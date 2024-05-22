import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  Navbar, Container , Nav } from 'react-bootstrap'; //대문자로 된 컴포넌트 다 Import 해야 함
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Etc from './routes/Etc.js'
import About from './routes/About.js'
import Detail from './routes/Detail.js'
// import axios from 'axios';

    function Footer(props){

      let navigate = useNavigate();

      return(
        <div style={ { display : 'flex' , alignItems: 'flex-start' , justifyContent: 'space-between' , marginTop: '50px' , background: 'whitesmoke', padding: '25px'} }>
          <div className='footer-content'
          style={ { display : 'inline-block', height: '50px' , textAlign: 'left' } }>
            <h6 style={ { fontWeight : 'bold' } }>고객서비스</h6>
            <p><Nav.Link onClick={() => {
                navigate('/QA')
              }}>Q&A</Nav.Link></p>

            <p><Nav.Link onClick={() => {
                navigate('/Login')
              }}>배송조회</Nav.Link></p>

            <p><Nav.Link onClick={() => {
                navigate('/Login')
              }}>A/S 접수</Nav.Link></p>
          </div>
          <div className='footer-content' 
          style={ {display : 'flex' , float: 'left' , display : 'inline-block' , textAlign: 'left'} }>
            <h6 style={ { fontWeight : 'bold' } }>Customer Service</h6>
            <p>문의 : cs@carin2014.com</p>
            <p>운영시간 : 대표 마음대로</p>
      
          </div>
          <div className='footer-content' 
          style={ {display : 'flex' , float: 'left' , display : 'inline-block', textAlign: 'left'} }>
            <h6 style={ { fontWeight : 'bold' } }>Company Information</h6>
            <p>대표자명 : 지채빈</p>
            <p>대표전화번호 : 032 - 345 - 6789</p>
            <p>주소 : 인천시</p>
          </div>
        </div>
      )
    }


  


export default Footer;
