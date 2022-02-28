import styles from "../styles/Produtos.module.css"
import api from "../pages/api/api"
import { useCallback, useEffect, useState } from "react"
import Produto from "./produto"

export default function Produtos(props){
    const [categoria_nome, setCategoriaNome] = useState("")
    const [produtos, setProdutos] = useState([])
    const [subprodutos, setSubProdutos] = useState([])

    async function carregarProdutos(){
        const req = await fetch(`http://localhost:3000/api/${props.categoria}`);
        const json = await req.json();
        setProdutos(json.reverse())
    }
    async function carregarSubProdutos(){
        const req = await fetch(`http://localhost:3000/api/${props.categoria}`);
        const json = await req.json();
        const object = json.reverse()
        const produtos_filtro = object.filter(function(ele){return ele.produto_tipo == props.categoria})
        const subprodutos = produtos_filtro.filter(function(ele){return ele.produto_categorias.includes(props.subcategoria)})
        setSubProdutos(subprodutos)
        console.log(subprodutos)
    }

    useEffect(()=>{
        setCategoriaNome(`${props.categoria}s`)
        setProdutos([])
        setSubProdutos([])
        carregarProdutos()
        carregarSubProdutos()

    },[props.categoria,props.subcategoria])
    
    function renderizarProdutos(){
        if(props.subcategoria === undefined){
            return (produtos.length) ? 
                <div className={styles.produtos_sessao_itens}>{
                    produtos.map((produto, key)=>(
                    <Produto key={key} item={produto}/>))}
                </div> : 
                <div className={styles.loading} >
                <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"/></div>
        }else{
            return (subprodutos.length) ? 
                <div className={styles.produtos_sessao_itens}>{
                    subprodutos.map((produto, key)=>(
                    <Produto key={key} item={produto}/>))}
                </div> : 
                <div className={styles.loading} >
                <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"/></div>
        }
    }

    return(
        <div className={styles.produtos_sessao}>
            <div className={styles.produtos_categoria_nome}>{categoria_nome}</div>
            {renderizarProdutos()}
        </div>
    )
}