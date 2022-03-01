import { Component } from "react/cjs/react.development"
import styles from "../styles/Form.module.css"
import Image from "next/image"
import Link from "next/link"

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            busca: ""
        }
    }

    handleBusca = (e) => {
        this.setState({
            busca: e.target.value
        })
    }
    submit = (e) =>{
        console.log(this.state.busca)
        e.preventDefault();
    }

    render(){
        return(
            <div className={styles.header_search}>
                <div className={styles.header_search_field}>
                    <form className={styles.header_search_form} onSubmit={this.submit}>
                        <input className={styles.search_bar} type="text" placeholder="Buscar" value={this.state.busca} onChange={this.handleBusca}></input>
                        <Link href={`/categorias/search?search=${this.state.busca}`}>
                            <a>
                                <button type="submit" className={styles.search_button}>
                                    <Image src="/search.svg" alt="search" width={15} height={15}/>
                                </button>
                            </a>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form