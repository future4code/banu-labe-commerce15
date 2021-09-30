import React from 'react'; 
import styled from 'styled-components';

const ImgLogo = styled.img`
 height: 12vh;
 /* margin-top: 10px */
`

const HeaderHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 12vh;
  background-color: #4daecd;
`
class Home extends React.Component {
    render() {
      return (
        <div>
            <HeaderHome>
            <ImgLogo src='/img/space-art-logo.png' />
            <input name='filtro' placeholder="O que você prcura?" /> 
            </HeaderHome>
        </div>
      )
    };
  }
  export default Home;