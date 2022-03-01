import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Produtos from '../components/produtos'
import Categorias from '../components/categorias'

export default function Home() {
  return (
    <div className={styles.skateshop}>
      <Header/>
      <Categorias/>
      <Produtos categoria={"storage"} subcategoria={undefined} search={undefined}/>
    </div>
  )
}
