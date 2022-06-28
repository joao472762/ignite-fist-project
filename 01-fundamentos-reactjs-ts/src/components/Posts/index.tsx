import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.css'

import ptBr from 'date-fns/locale/pt-BR'
import {format, formatDistanceToNow,} from "date-fns"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


interface Author {
    avatarUrl: string,
    name: string,
    role: string
}

interface CommentContent{
    type: string,
    content: string
}

interface props {
    Post:
    {
        author: Author,
        commentContent: CommentContent[]
        publishedAt: Date
    }
}

export function Post(PostProps:props){

    const [userId,setUserId] = useState(1)
    const [comments,setComments] = useState([{
        id: 0,
        textContent: 'a rua é nóis'
    }])
    const [newCommentText, setNewCommentText] = useState('')


    const {author,commentContent,publishedAt} =  PostProps.Post
    const {name,role,avatarUrl}  = author

    const publishedDateFormated =
    format(publishedAt,"dd 'de' MMMM 'de' yyyy",{
        locale:ptBr
    })

    const publisedDateWihtHours = publishedAt.toISOString()

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBr,
        addSuffix: true
    })
    
    function handleCreateNewComment(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        let newComment  = {
            id:  userId,
            textContent: newCommentText,
        }
        
        setUserId(state =>{
            return state + 1
        })
        setComments(state => {
            return [...state,newComment]
        })
        setNewCommentText('') 
        
        
        
    }
    
    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
       
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        
        event.target.setCustomValidity('por favor preencha o campo')
        
        
    }

    function deleteComment(commentIdToDelete: number){
        const listCommentWithoutOne = comments.filter(comment=>{
            return comment.id != commentIdToDelete
        })
        setComments(listCommentWithoutOne)
    }

  
    
    
    const isNewCommentEmpty = newCommentText.length === 0

    return(
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <Avatar
                        hasBorder={true}
                        src= {avatarUrl}
                     />
                    <div className={styles.authorInfo}>
                        <strong>{name}</strong>
                        <span>{role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publisedDateWihtHours}>
                    {publishedDateRelativeToNow}
                </time>

            </header>

            <section className={styles.content}>
                {commentContent.map(line=>{
                    return(
                        line.type === 'paragraph'
                        ?<p key={line.content}> {line.content} </p>
                        :<p key={line.content}> <a href="#">{line.content}</a></p>
                    )
                })}
                <p>
                     <a href="">#novoprojeto</a>
                     <a href="">#nlw</a>
                     <a href="">#rocketseat</a>
                </p>
            </section>
            <form 
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}>
                <strong>deixe seu fedbaack</strong>

                <textarea
                    required
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='digite o seu comentário'
                    onInvalid={handleNewCommentInvalid}
                />

                <footer>
                    <button
                        disabled = {isNewCommentEmpty}
                        type="submit">Publicar
                    </button>
                </footer>
            </form>
            <div>
                {
                    comments.map(comment =>{
                        return(
                            comment.id != 0
                            &&<Comment
                                key={comment.id}
                                
                                
                                commentId={comment.id}
                                src={ avatarUrl}
                                content={ comment.textContent}
                                onDeleteComment={ deleteComment}
                            
                            />
                        )
                    })
                }       
            </div>
        </article>
    )
}
