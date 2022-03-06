import { Component } from "react"
import Categorias from "../../components/categorias"
import Header from "../../components/header"
import Produtos from "../../components/produtos"
import styles from "../../styles/Home.module.css"
import Footer from "../../components/footer"
import Categoria from "../../components/categoria"

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            loc: props.router,
            carrinho: []
        }
    }

    add = (e) => {
        console.log(this.state.loc)
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
        return(
            <div className={styles.skateshop}>
                <Header carrinho={this.state.carrinho} add={this.add} rmv={this.rmv}/>
                <Categorias/>
                <Categoria add={this.add} rmv={this.rmv}/>
                <Footer/>
            </div>
        )
    }
}

export default Home
