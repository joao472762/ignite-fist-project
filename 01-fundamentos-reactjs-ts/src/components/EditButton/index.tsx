import pincel from "../../assets/pencil.svg"
import styles from "./styles.module.css"

import {PencilLine} from 'phosphor-react'

export function EditButton(Props ={
    title : ''
}){
    return(
        <a className={styles.button} href='#'>
            <PencilLine
             size={20}
            />
            <span>{Props.title}</span>
        </a>
    )
}