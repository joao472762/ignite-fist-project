import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.css'

import { useState } from 'react'
import ptBr from 'date-fns/locale/pt-BR'
import {format, formatDistanceToNow,} from "date-fns"



export function Post({
    PostProps={
        author: {
            avatarUrl: '',
            name: '',
            role: ''
            },
            content:[ 
                { type: '',content: ''},      
             ],
             publishedAt: new Date('2022-5-15 20:30:20')
    }
     
}){

    const [userId,setUserId] = useState(1)
    const [comments,setComments] = useState([{
        id: 0,
        textContent: 'a rua é nóis'
    }])
    const [applaudCounts,setApplaudsCounts] = useState (0)
    const [newCommentText, setNewCommentText] = useState('')


    const {author,content,publishedAt} = PostProps
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
    
    function handleCreateNewComment(){
        event.preventDefault()
        let newComment  = {
            id:  userId,
            textContent: newCommentText,
            
        }
        
        setUserId(userId + 1)
        setComments(state => {
            return [...state,newComment]
        })
        setNewCommentText('') 
        
        
        
    }
    
    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
       
    }

    function handleNewCommentInvalid(event){
        
        event.target.setCustomValidity('por favor preencha o campo')
        
        
    }

    function deleteComment(commentIdToDelete){
        const listCommentWithoutOne = comments.filter(comment=>{
            return comment.id != commentIdToDelete
        })
        setComments(listCommentWithoutOne)
    }
    function addNewApplauds(){
        setApplaudsCounts(state =>{
            return state + 1
        })
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
                {content.map(line=>{
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
                                props={{
                                    applauds: applaudCounts,
                                    commentId:comment.id,
                                    src: avatarUrl,
                                    content: comment.textContent,
                                    onDeleteComment: deleteComment,
                                    onAddNewApplauds: addNewApplauds,
                                }}
                                
                            />
                        )
                    })
                }       
            </div>
        </article>
    )
}
