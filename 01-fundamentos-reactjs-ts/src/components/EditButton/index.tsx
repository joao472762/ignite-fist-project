import pincel from "../../assets/pencil.svg"
import styles from "./styles.module.css"

import {PencilLine} from 'phosphor-react'

type Props = {
    title:string
}


export function EditButton({title}:Props){
    return(
        <a className={styles.button} href='#'>
            <PencilLine
             size={20}
            />
            <span>{title}</span>
        </a>
    )
}