import React from 'react'
import styled from 'styled-components'
import Background from '../assets/images/Login-Background.jpg'
const BackgroundImage = () => {
  return (
    <Container>
      <img src={Background} alt="Backgound"></img>
    </Container>
  )
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img{
    height: 100vh;
    width: 100vw;
  }
  `
export default BackgroundImage