import styles from "../styles/Produto.module.css"

export default function Produto(props){
    const produto = props.item
    const imagens = produto? props.item.produto_fotos_urls : null

    return(
        <div className={styles.produto}>
            <div className={styles.produto_fotos}>
                <div className={styles.produto_fotos_container}>
                    <img src={imagens && imagens[0]}/>
                </div>
            </div>
            <div className={styles.produto_nome}>
                {produto && produto.produto_nome}
            </div>
            <div className={styles.produto_preco}>
                {produto && `R$ ${produto.produto_preco}`}
            </div>
        </div>
    )
}