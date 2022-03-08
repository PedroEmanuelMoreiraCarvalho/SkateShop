import { Component } from 'react'

class Home extends Component{
    constructor(props){
      super(props)
      this.state = {
          produto_nome: ""
      }
    }
  
    add = (e) => {
      let car = this.state.carrinho
      car.push(e)
    }

    handleProduto = (e) => {
        this.setState({
            produto_nome: e.target.value 
        })
    }
    enviarProduto = (e) => {
        e.preventDefault()
        console.log(this.state.produto_nome)
    }
  
    render(){
      return (
        <div>
            <input type="text" placeholder="nome do produto" value={this.state.produto_nome} onChange={this.handleProduto}></input>
            <button onClick={this.enviarProduto}>enviar</button>
        </div>
      )
    }
  }
  
  export default Home