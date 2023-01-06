import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
const Header = (props) => {
  const navigate=useNavigate();
  return (
    <Container className='flex a-center j-between'>
      <div className='logo'>
        <img  src={logo} alt="logo"></img>
      </div>
      <button onClick={()=>navigate(props.login?'/login':'/signup')}>
        {props.login?"Login":"Signup"}</button>
    </Container>
  )
}
const Container = styled.div`
padding: 0 3.8rem;
.logo{
  img{
    height: 5rem;
      }
    }
button{
  padding:0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  font-weight: bolder;

}
}
`;
export default Header