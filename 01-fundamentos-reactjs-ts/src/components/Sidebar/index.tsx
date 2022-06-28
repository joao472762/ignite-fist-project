import styles from "./styles.module.css"

import { Avatar } from "../Avatar";
import { EditButton } from "../EditButton";

export function SideBar(){
    return(
        <aside className={styles.aside} >
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>

                <Avatar
                hasBorder
                src="https://github.com/joao472762.png"
                />

                <strong>Amanda Aguiar</strong>
                <p>UI Designer</p>

            </div>
            <footer>

                <EditButton
                title="Editar o seu Perfil"
                />
            </footer>
        </aside>
    );
}