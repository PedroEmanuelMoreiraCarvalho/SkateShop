import styles from "../styles/Header.module.css"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function Header() {

    const [busca,setBusca] = useState()
    console.log(busca)

    return(
        <div className={styles.header_background}>
            <img src="https://th.bing.com/th/id/R.90013835cf8243da46b19e77cf691de4?rik=aPUvix0H%2bffV6Q&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fCyT83yY.jpg&ehk=GGGTOiiKC8tXVhawGKmUXZeQvzrWYW7QX6607SidHcM%3d&risl=&pid=ImgRaw&r=0"/>
            <div className={styles.header}>
                <div className={styles.header_search}>
                    <div className={styles.header_search_field}>
                        <div className={styles.header_search_field_textfield}>
                            <input type="text" onChange={e=> setBusca(e.target.value)}></input>
                        </div>
                        <div className={styles.header_search_field_button}>
                            <Link href={`categorias/${busca}`}>
                                <a>
                                    <div className={styles.menu_categoria}>
                                        <Image src="/search.svg" alt="search" width={15} height={15} />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.header_logo}>
                    <div className={styles.header_logo_image}>
                        <Image src="/logo.svg" width={218} height={180}/>
                    </div>
                </div>
                <div className={styles.header_client}>
                    <div className={styles.header_client_bag}>
                        CARRINHO (0) R$0,00
                    </div>
                    <div className={styles.header_client_login}>
                        <ul>
                            <li><a href="">Cadastre-se</a></li>
                            <li><a href="">Iniciar Sessão</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}