import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Produtos from '../components/produtos'
import Categorias from '../components/categorias'
import Footer from '../components/footer'
import { Component } from 'react'

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      carrinho: []
    }
  }

  add = (e) => {
    let car = this.state.carrinho
    car.push(e)
    this.setState({
      carrinho: car
    })
  }

  rmv = (e) => {
    let car = this.state.carrinho
    car = car.filter((ele)=>{return ele!=e})
    this.setState({
      carrinho: car
    })
  }

  render(){
    return (
      <div className={styles.skateshop}>
        <Header carrinho={this.state.carrinho} add={this.add} rmv={this.rmv}/>
        <Categorias/>
        <Produtos categoria={"storage"} subcategoria={undefined} search={undefined} add={this.add} rmv={this.rmv}/>
        <Footer/>
      </div>
    )
  }
}

export default Home
