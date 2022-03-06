import styles from "../styles/CarrinhoProduto.module.css"
function CarrinhoProduto(props){
    const produto = props.produto

    function removerProduto(produto){
        props.rmv(produto)
    }
    return(
        <div className={styles.carrinho_produto}>
            <div className={styles.produto_imagem}>
                <img width="100%" height="100%" src={produto.produto_fotos_urls[0]}/>
            </div>
            <div className={styles.produto_info}>
                <div className={styles.produto_nome}>{produto.produto_nome}</div>
                <div className={styles.produto_preco}>R$ {produto.produto_preco}</div>
                <button onClick={(ev)=>{removerProduto(produto);ev.preventDefault()}}>Remover Produto</button>
            </div>
        </div>
    )
}

export default CarrinhoProduto