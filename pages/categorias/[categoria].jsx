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
    const [search, setSearch] = useState("")

    useEffect(()=>{
        const router_categoria = router.query.categoria
        const router_subcategoria = router.query.subcategoria
        const router_search = router.query.search
        setSearch(router_search)
        setCategoria(router_categoria)
        setSubCategoria(router_subcategoria)
    },[router?.query])

    function produtos(produtos_categoria, produtos_subcategoria, produtos_search){
        if(categoria){
            return <Produtos categoria={produtos_categoria} subcategoria={produtos_subcategoria} search={produtos_search}/>
        }
    }
    return (
        <div className={styles.skateshop}>
            <Header/>
            <Categorias/>
            {produtos(categoria,subcategoria,search)}
        </div>
    )
}
