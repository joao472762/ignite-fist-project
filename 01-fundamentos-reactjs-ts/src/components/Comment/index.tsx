import { Avatar } from "../Avatar";
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'

import styles from "./styles.module.css"

export function Comment({
    props=  {
        applauds: 2,
        src:'',
        content: '',
        commentId: 0,
        onDeleteComment: () => (null),
        onAddNewApplauds: () => (null)

    }
    
}){

    const {content,onDeleteComment,src, onAddNewApplauds} = props

    function handleDeleteComment(){
        onDeleteComment(props.commentId)
    }
    function handleAddNewApplauds(){
        onAddNewApplauds()
    }

    return(
        <section className={styles.comment}

        >
            <Avatar
            hasBorder = {false}
            src={src}
            />
            <div className={styles.profile}>
                <div className={styles.author}>
                    <div className={styles.authorInfo}>
                        <header>
                            <strong>Carla lane <span> (você)</span></strong>
                            <time
                            title="24 de maio de 2022"
                            dateTime="24-06-2022 04:32:30"
                            >Cerca de 2h</time>
                        </header>
                        <p>{content}</p>
                    </div>
                    <button 
                    onClick={handleDeleteComment}
                    title="Deletar comentário">
                        <Trash
                        size={24}
                        />
                    </button>
                </div>
                <footer className={styles.reaction}>
                    <button onClick={handleAddNewApplauds}>
                        <ThumbsUp
                        size={20}
                        />
                        <strong>Apaudir <span>{props.applauds}</span></strong>
                    </button>

                </footer>
            </div>
        </section>
    );
}