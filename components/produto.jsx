import { Component } from "react/cjs/react.development"
import styles from "../styles/Produto.module.css"

class Produto extends Component{

    constructor(props){
        super(props)
        this.produto = props.item
        this.imagens = props.item? props.item.produto_fotos_urls : null
        this.state = {
            noCarrinho : props.noCarrinho ? props.noCarrinho : false
        }
    }

    AdicionarAoCarrinho = (e) => {
        e.preventDefault()
        this.props.add(this.produto)
        this.setState({
            noCarrinho: true
        })
    }

    RemoverDoCarrinho = (e) => {
        e.preventDefault()
        this.props.rmv(this.produto)
        this.setState({
            noCarrinho: false
        })
    }

    render(){
        return(
        <div className={styles.produto}>
            <div className={styles.produto_fotos}>
                <div className={styles.produto_fotos_container}>
                    <img src={this.imagens && this.imagens[0]}/>
                </div>
            </div>
            <div className={styles.produto_nome}>
                {this.produto && this.produto.produto_nome}
            </div>
            <div className={styles.produto_preco}>
                {this.produto && `R$ ${this.produto.produto_preco}`}
            </div>
            {
                this.state.noCarrinho ? 
                <form class={styles.adicionarAoCarrinho} onSubmit={this.RemoverDoCarrinho}>
                    <button type="submit">Remover do Carrinho</button>
                </form> 
                :
                <form class={styles.adicionarAoCarrinho} onSubmit={this.AdicionarAoCarrinho}>
                    <button type="submit">Adicionar ao Carrinho</button>
                </form>
            }
        </div>
    )}
}

export default Produto