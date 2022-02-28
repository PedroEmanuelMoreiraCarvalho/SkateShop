import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import Produtos from '../../components/produtos'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Categorias from '../../components/categorias'

export default function Home() {

    const router = useRouter()
    const [categoria, setCategoria] = useState("")
    const [subcategoria, setSubCategoria] = useState("")

    useEffect(()=>{
        const router_categoria = router.query.categoria
        console.log(router_categoria)
        const router_subcategoria = router.query.subcategoria
        setCategoria(router_categoria)
        setSubCategoria(router_subcategoria)
        
    },[router?.query])

    function produtos(produtos_categoria, produtos_subcategoria){
        if(categoria){
            //console.log(`Categoria dos produtos: ${produtos_categoria}`)
            return <Produtos categoria={produtos_categoria} subcategoria={produtos_subcategoria}/>
        }
    }
    return (
        <div className={styles.skateshop}>
            <Header/>
            <Categorias/>
            {produtos(categoria,subcategoria)}
        </div>
    )
}
