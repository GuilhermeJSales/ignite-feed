import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react'



export function Post({author, publishedAt, content}){
  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale:ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comment, setComment] = useState([
    'Post muito bacana, hein?',
    
  ])

  const [newCommentText, setNewCommentText] = useState('');


  function handleCreateNewComment(){
      event.preventDefault()
      setComment([...comment, newCommentText]);
      setNewCommentText('');
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comment.filter(comment => {
      return comment !== commentToDelete;
    })
    setComment(commentsWithoutDeletedOne);
  }

  const isNewCurrentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <dir className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
        </dir>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>;
          } else if(line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          placeholder='Escreva um comentário'
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        /> 

        <footer>
          <button type='submit' disabled={isNewCurrentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map(comment => {
          return <Comment 
            key={comment} 
            content={comment}
            onDeleteComment={deleteComment}
          />
        })}
      </div>

    </article>
  )
}