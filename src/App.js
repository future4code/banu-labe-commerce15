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
        price: 50.0,
        imagemURL: <ProdutoImg src="/img/caneca1.png"/>,
      },
      {
        id: Date.now(),
        name: "Caneca 2",
        price: 44.0,
        imagemURL: <ProdutoImg src="/img/caneca2.png"/>,
      },
      {
        id: Date.now(),
        name: "Caneca3",
        price: 80.0,
        imagemURL: <ProdutoImg src="/img/caneca3.png"/>,
      },
      {
        id: Date.now(),
        name: "Caneca4",
        price: 300.0,
        imagemURL: <ProdutoImg src="/img/caneca4.png"/>,
      },
      {
        id: Date.now(),
        name: "Caneca5",
        price: 20.0,
        imagemURL: <ProdutoImg src="/img/caneca5.jpg"/>,
      },
      {
        id: Date.now(),
        name: "Caneca6",
        price: 150.0,
        imagemURL: <ProdutoImg src="/img/caneca10.png"/>,
      },
    ],
    filtro: "",
    query: "",
    minPrice: "",
    maxPrice:"",
    order:1
  }

  updateQuery = (ev) =>{
    this.setState({
      query:ev.target.value
    
    })
  }

  updateMinPrice = (ev) => {
    this.setState({
       minPrice: ev.target.value
    })
 }

 updateMaxPrice = (ev) => {
    this.setState({
       maxPrice: ev.target.value
    })
 }
 updateOrder = (ev) => {
  this.setState({
    order:ev.targ
  })
 }

 render() {
  const novoArrayDeProdutos = this.state.produtos
  .filter(prod =>{
     return prod.name.toLowerCase().includes(this.state.query.toLowerCase())
   })
   .filter(prod =>{
     return this.state.minPrice === "" || prod.price >= this.state.minPrice 
   })
   .filter(prod =>{
    return this.state.maxPrice === "" || prod.price <= this.state.maxPrice 
  })
   .map((produto)=>{
    return (
      <CardProduto>
        {produto.imagemURL}
        <p>{produto.name}</p>
        <p>R${produto.price},00</p>
        <button>
          Adicionar ao carrinho
        </button>
       </CardProduto>
    )
  });

  return (
   <div>

   <Home
   query={this.state.query}
   updateQuery={this.updateQuery}
   minPrice={this.state.minPrice}
   updateMinPrice={this.updateMinPrice}
   maxPrice={this.state.maxPrice}
   updateMaxPrice={this.updateMaxPrice}
   >
   </Home>

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