import React from 'react'; 
import Carrinho from './Carrinho'
import styled from 'styled-components';

const ImgLogo = styled.img`
 height: 12vh;
 /* margin-top: 10px */
`
const ImgCarrinho = styled.img`
 height:5vh;
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

  // state = {
  //   pagina: "home" 
  // }

  
  // mudaPaginaCarrinho = () => {
  //  this.setState ({ pagina: "carrinho" })
  // }


    render() {

      // let page;
      // if (this.state.pagina === "home") {
      //   page = <Home />;
      // } else if (this.state.pagina === "carrinho") {
      //   page = <Carrinho />;
      // }

      return (
        <div>
           
            <HeaderHome>
            <ImgLogo src='/img/space-art-logo.png' />
            <input 
            placeholder="Busca por nome"
            value = {this.props.query}
            onChange = {this.props.updateQuery}
            
             /> 
             {/* <div>{page}</div> */}
             <button> <ImgCarrinho src='/img/carrinho.png' /> </button>
       
            </HeaderHome>
            <div>
              <input
              type= "number" 
              placeholder="Preço Minimo"  
              value = {this.props.minPrice} 
              onChange = {this.props.updateMinPrice}
              />
            <input
              type= "number" 
              placeholder="Preço Máximo"
              value= {this.props.MaxPrice}
              onChange = {this.props.updateMaxPrice}
              />
            <label for="sort">Ordenação</label>
            <select
            name="order"
            value={this.props.order}
            onChange={this.props.updateOrder}
            >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
            </select>

            </div>

        </div>
      )
    };
  }
  export default Home;