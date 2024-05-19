import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  Navbar, Container , Nav } from 'react-bootstrap'; //대문자로 된 컴포넌트 다 Import 해야 함
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Etc from './routes/Etc.js'
import About from './routes/About.js'
import Detail from './routes/Detail.js'
// import axios from 'axios';
import Cart from './routes/Cart.js'

    function Footer(props){

      let navigate = useNavigate();

      return(
        <div className='footer-container' style={ {height : '25 0px', background : 'lightgray'} }>
          <div className='footer-content' 
          style={ {display : 'flex' , float: 'left' , display : 'inline-block',} }>
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
          style={ {display : 'flex' , float: 'left' , display : 'inline-block'} }>
            <h6 style={ { fontWeight : 'bold' } }>Customer Service</h6>
            <p>제품 및 AS 문의 : cs@carin2014.com</p>
            <p>운영시간 : 대표 마음대로</p>
            <p></p>
          </div>
          <div className='footer-content' 
          style={ {display : 'flex' , float: 'left' , display : 'inline-block'} }>
            <h6 style={ { fontWeight : 'bold' } }>Company Information</h6>
            <p>대표자명 : 지채빈</p>
            <p>대표전화번호 : 032 - 345 - 678</p>
            <p>주소 : 인천시 연수구 송도동</p>
          </div>
        </div>
      )
    }


  


export default Footer;
