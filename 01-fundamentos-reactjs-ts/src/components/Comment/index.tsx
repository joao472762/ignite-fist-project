import { Avatar } from "../Avatar";
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'

import styles from "./styles.module.css"
import { useState } from "react";



interface CommentProps {
    onDeleteComment: (commentId:number) => void,
    src: string,
    content: string,
    commentId:  number
}

export function Comment({
    commentId,
    content,
    onDeleteComment,
    src
}:CommentProps){


    const [applaudCounts,setApplaudsCounts] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(commentId)
    }
    function handleAddNewApplauds(){
        setApplaudsCounts(state =>{
            return state + 1
        })
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
                        <strong>Apaudir <span>{applaudCounts}</span></strong>
                    </button>

                </footer>
            </div>
        </section>
    );
}