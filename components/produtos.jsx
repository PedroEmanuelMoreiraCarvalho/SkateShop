import styles from "../styles/Produtos.module.css"
import { useCallback, useEffect, useState } from "react"
import Produto from "./produto"

function verificarSimilaridade(sentenca1,sentenca2){
    if(sentenca1 && sentenca2){
        sentenca1 = sentenca1.toLowerCase()
        sentenca2 = sentenca2.toLowerCase()
        var similarity = 0
        var max_similarity = 0
        var maiorpalavra = ""
        var menorpalavra = ""
        if(sentenca1.length>sentenca2.length){
        maiorpalavra = sentenca1
        menorpalavra = sentenca2
        }else{
        maiorpalavra = sentenca2
        menorpalavra = sentenca1
        }
    
        for(let i=0;i<menorpalavra.length;i++){
            let char = menorpalavra[i]
            for(let o=0;o<maiorpalavra.length;o++){
                let second_char = maiorpalavra[o]
                
                if(char==second_char){
                    similarity++
                    if(i==o){
                        similarity++
                    }
                    break
                }
                maiorpalavra = maiorpalavra.replace(maiorpalavra[o], " ")
            }
            max_similarity+=2
        }
        var percentage = Math.floor((similarity*100)/max_similarity)
        return percentage
    }
}
export default function Produtos(props){
    const [categoria_nome, setCategoriaNome] = useState("")
    const [produtos, setProdutos] = useState([])
    const [subprodutos, setSubProdutos] = useState([])
    const [resultados, setResultados] = useState([])
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
    }
    async function carregarResultados(){
        const filter_sim = 60
        if(props.categoria){
            const req = await fetch(`http://localhost:3000/api/${props.categoria}`);
            const json = await req.json();
            const object = json.reverse()
            const produtos_filtro = object.filter(function(ele){return ele.produto_tipo == props.categoria})
            const subprodutos = produtos_filtro.filter(function(ele){return ele.produto_categorias.includes(props.subcategoria)})
            const results = subprodutos.filter(function(ele){return verificarSimilaridade(props.search,ele.produto_nome)>filter_sim}) 
            setResultados(results)
        }
        if(props.search){
            const req = await fetch(`http://localhost:3000/api/${props.categoria}`);
            const json = await req.json();
            const object = json.reverse()
            const results = object.filter(function(ele){return verificarSimilaridade(props.search,ele.produto_nome)>filter_sim}) 
            setResultados(results)
        }
    }

    function add(e){
        props.add(e)
    }
    function rmv(e){
        props.rmv(e)
    }

    useEffect(()=>{
        setCategoriaNome(`${props.categoria}s`)
        setProdutos([])
        setSubProdutos([])
        setResultados([])
        carregarProdutos()
        carregarSubProdutos()
        carregarResultados()
        console.log(props.carrinho)

    },[props.categoria,props.subcategoria,props.search])

    useEffect(()=>{
        console.log("arrinho update")
    },[props.carrinho])
    
    function renderizarProdutos(){
        if(props.subcategoria === undefined && props.search === undefined){
            return (produtos.length) ? 
                <div className={styles.produtos_sessao_itens}>{
                    produtos.map((produto, key)=>(
                    <Produto key={key} item={produto} carrinho={props.carrinho} add={add} rmv={rmv}/>))}
                </div> : 
                <div className={styles.loading} >
                <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"/></div>
        }else if(props.search === undefined){
            return (subprodutos.length) ? 
                <div className={styles.produtos_sessao_itens}>{
                    subprodutos.map((produto, key)=>(
                    <Produto key={key} item={produto} carrinho={props.carrinho} add={add} rmv={rmv} />))}
                </div> : 
                <div className={styles.loading} >
                <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"/></div>
        }else{
            return (resultados.length) ? 
            <div className={styles.produtos_sessao_itens}>{
                resultados.map((produto, key)=>(
                <Produto key={key} item={produto} carrinho={props.carrinho} add={add} rmv={rmv} />))}
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