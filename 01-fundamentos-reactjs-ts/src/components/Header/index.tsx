import styles from './styles.module.css'
import IgniteLogo from "../../assets/IgniteLogo.svg"

console.log(IgniteLogo)
export function Header(){
    return(
        <header className={styles.header}>
            <img 
                src={IgniteLogo}
                alt="logotip do ignite" 
                className={styles.image}
                />
            <h1 className={styles.title}>IGNITE FEED </h1>

        </header>
    )
}