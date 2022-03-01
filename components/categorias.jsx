import styles from "../styles/Categorias.module.css"
import Link from "next/link"

export default function Categorias(props){

    return(
        <div className={styles.categoria_background}>
            <img src="https://th.bing.com/th/id/R.90013835cf8243da46b19e77cf691de4?rik=aPUvix0H%2bffV6Q&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fCyT83yY.jpg&ehk=GGGTOiiKC8tXVhawGKmUXZeQvzrWYW7QX6607SidHcM%3d&risl=&pid=ImgRaw&r=0"/>
            <div className={styles.categorias}>
                <div className={styles.menu_itens}>
                    <Link href="/">
                        <a>
                            <div className={styles.menu_categoria}>Home</div>
                        </a>
                    </Link>
                </div>
                <div className={styles.menu_itens}>
                    <div className={styles.menu_item}> 
                        <a>
                            <div className={styles.menu_categoria}>Produtos</div>
                        </a>
                        <div className={styles.categoria_itens}>
                            <Link href="/categorias/skate">
                                <a>
                                    <div className={styles.menu_categoria}>Skate</div>
                                </a>
                            </Link>
                            <Link href="/categorias/roupa">
                                <a>
                                    <div className={styles.menu_categoria}>Roupas</div>
                                </a>
                            </Link>
                            <Link href="/categorias/acessorio">
                                <a>
                                    <div className={styles.menu_categoria}>Acessórios</div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.menu_itens}>
                    <Link href="/categorias/roupa">
                        <a>
                            <div className={styles.menu_categoria}>Sobre</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}