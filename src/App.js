import React from 'react';
import styled from 'styled-components';
import Home from './componentes/Home';
import produtos from './componentes/produtos/produtos'

const CardProduto = styled.div`
   height: 65vh;
   width: 18vw;
   padding: 0px 0px 20px 0px;
   box-shadow: 1px 1px 5px #4daecd;
   border-radius: 9px;
   margin-top: 40px;
   margin-bottom: 40px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: all 0.3s ease;
   overflow: hidden;

   :hover{
    -webkit-transform: scale(1.1);
   -ms-transform: scale(1.1);
   transform: scale(1.1);
   }
`
const ProdutoImg = styled.img`
 width: 100%;
 height: 75%;
`
const MainPrincipal = styled.div`
  background-color: #eae7e7;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
    `

  const FooterPrincipal = styled.div`
  background-color: #4daecd;
  height: 12vh;
  `

class App extends React.Component {
  state = {
    produtos: [
      {
        id: Date.now(),
        name: "Caneca1",
        value: 50.0,
        imagemURL: <ProdutoImg src="/img/caneca1.png"/>,
      },
      {
        id: Date.now(),
        name: "Caneca2",
        value: 50.0,
        imagemURL: <ProdutoImg src="/img/caneca2.png"/>,
      },
      {
        id: Date.now(),
        name: "Caneca3",
        value: 50.0,
        imagemURL: <ProdutoImg src="/img/caneca3.png"/>,
      },
      {
        id: Date.now(),
        name: "Caneca4",
        value: 50.0,
        imagemURL: <ProdutoImg src="/img/caneca4.png"/>,
      },
      {
        id: Date.now(),
        name: "Caneca5",
        value: 50.0,
        imagemURL: <ProdutoImg src="/img/caneca5.jpg"/>,
      },
      {
        id: Date.now(),
        name: "Caneca6",
        value: 50.0,
        imagemURL: <ProdutoImg src="/img/caneca10.png"/>,
      },
    ],
    filtro: "",
    valueInput: ""
  }
  render() {
    const novoArrayDeProdutos = this.state.produtos.map((produto)=>{
      return (
        <CardProduto>
          {produto.imagemURL}
          <p>{produto.name}</p>
          <p>R${produto.value},00</p>
          <button>
            Adicionar ao carrinho
          </button>
        </CardProduto>
      )
    });

    return (
     <div>
       <Home />
       <MainPrincipal>
        {novoArrayDeProdutos}
       </MainPrincipal>
       <FooterPrincipal>
       </FooterPrincipal>
     </div>
    )
  }
}
export default App;
