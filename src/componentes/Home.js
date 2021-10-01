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
            <input 
            placeholder="Busca por nome"
            value = {this.props.query}
            onChange = {this.props.updateQuery}
            
             /> 
       
            </HeaderHome>
            <div>
              <input
              type= "number" 
              placeholder="Preço Minimo"   
              />
            <input
              type= "number" 
              name="minPrice"
              placeholder="Preço Máximo"
              />
            </div>
        </div>
      )
    };
  }
  export default Home;