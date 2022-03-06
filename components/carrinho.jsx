import { useEffect,useState } from "react"
import CarrinhoProduto from "./carrinho_produto"
import styles from "../styles/Carrinho.module.css"
function Carrinho(props){
    const [carrinho,setCarrinho] = useState(props.carrinho)
    const [aberto, setCarrinhoAberto] = useState(false)
    const [carrinhoStyle, setStyle] = useState(styles.carrinho_closed)
    
    useEffect(()=>{
        setCarrinho(props.carrinho)
    },[props.carrinho])

    const abrir_carrinho = () => {
        setCarrinhoAberto(true)
        setStyle(styles.carrinho_open)
    }

    const fechar_carrinho = () => {
        setCarrinhoAberto(false)
        setStyle(styles.carrinho_closed)
    }

    const alternar_carrinho = () => {
        if(aberto){
            fechar_carrinho()
        }else{
            abrir_carrinho()
        }
    }

    function calcular_valor_total(){
        const valor_total = 0
        let precos = carrinho ? carrinho.map((ele)=>{return +ele.produto_preco}):0
        for(let i in precos){
            let preco = +precos[i].toFixed(2)
            valor_total+=preco
        }
        return valor_total.toFixed(2)
    }

    return(
        <div>
            <button className={styles.header_client_bag} onClick={(ev)=>{ev.preventDefault();alternar_carrinho()}}>Carrinho ({carrinho ? carrinho.length : 0}) R${calcular_valor_total()}</button>
            <div className={carrinhoStyle}>
                <button className={styles.btn} onClick={(ev)=>{ev.preventDefault();alternar_carrinho()}}>Fechar Carrinho</button>
                <div className={styles.carrinho_produtos}>
                    <div className={styles.compra_info}>Carrinho ({carrinho ? carrinho.length : 0})</div>
                    {carrinho.length ? carrinho.map((produto)=>{
                        return(<div><CarrinhoProduto rmv={props.rmv} produto={produto}/></div>)}) : <div style={{display:"flex",justifyContent:"center",margin:"20px"}}>Sem Produtos</div>
                    }
                    <button className={styles.finalizar_pedido}>Finalizar Pedido</button>
                </div>
            </div>
        </div>
    )
}

export default Carrinho