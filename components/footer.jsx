import styles from "../styles/Footer.module.css"

export default function Footer() {
    return(
        <div className={styles.footer_background}>
            <img src="https://th.bing.com/th/id/R.90013835cf8243da46b19e77cf691de4?rik=aPUvix0H%2bffV6Q&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fCyT83yY.jpg&ehk=GGGTOiiKC8tXVhawGKmUXZeQvzrWYW7QX6607SidHcM%3d&risl=&pid=ImgRaw&r=0"/>
            <div className={styles.footer}>
                <div className={styles.footertexto1}>
                    Desenvolvido por Pedro Emanuel
                </div>
                <div className={styles.footertexto2}>
                    feito sem fins lucrativos. Fonte dos produtos:
                    <a href="https://www.mkdskateshop.com.br"> MKD skateshop</a>
                </div>
            </div>
        </div>
    )
}