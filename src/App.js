import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  Navbar, Container , Nav } from 'react-bootstrap'; //대문자로 된 컴포넌트 다 import 해야 함
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Etc from './routes/Etc.js'
import About from './routes/About.js'
import Detail from './routes/Detail.js'
// import axios from 'axios';
import Cart from './routes/Cart.js'
import QA from './routes/QA.js';
import Ship from './routes/Ship.js';
import AS from './routes/AS.js';
import Login from './routes/Login.js';
import Footer from './Footer.js'




function App() {

  let [shop] = useState();
  let navigate = useNavigate();

  return (
    <div className='App'>

      <Navbar bg='light' variant='light'>
        <Container>
          <Nav.Link onClick={() => { 
            navigate('/')
          }} style={ { fontSize : '25px' , margin : '7px' } }>WONDEREGO</Nav.Link>

          <Nav className='me-auto'>
            <Nav.Link onClick={() => {
              navigate('/detail')
            }}>SUNGLASSES</Nav.Link>

            <Nav.Link onClick={() => {
              navigate('/about')
            }}>EYEGLASSES</Nav.Link>

            <Nav.Link onClick={() => {
              navigate('/etc')
            }}>ACC</Nav.Link>
            
            <Nav.Link onClick={() => {
              navigate('/Login')
            }} style={ {} }>로그인</Nav.Link>
            
            <Nav.Link onClick={() => {
              navigate('/cart')
            }}  style={ {} }>CART</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<div>
          <div className='main-bg'></div>
            <div>
              <p>OUR STORY</p> 
            </div>
        </div>} />
        <Route path='/detail' element={<Detail />} />

        <Route path='/about' element={<About />} />

        <Route path='/etc' element={<Etc />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/QA' element={<QA/>} />
        
        <Route path='/Ship' element={<Ship />} />

        <Route path='/AS' element={<AS />} />

        <Route path='/Login' element={<Login />} />

        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
        </div>
      </div>
      <Footer />
    </div>

 
      );
    }



export default App;
