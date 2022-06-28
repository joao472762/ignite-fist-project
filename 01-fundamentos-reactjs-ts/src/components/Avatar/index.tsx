import styles from "./styles.module.css"


export function Avatar(Props={
    src: '',
    hasBorder: true
}){
    const {src} = Props
    const hasBorder = Props.hasBorder != false

    return(
            <img 
                src ={src}
                className={
                    hasBorder
                    ? styles.avatarWithBorder
                    : styles.avatar
                } 
                alt="logo" 
            />     
    )
}
