import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}){
  return (
    <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
        <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Guilherme Jesus Sales</strong>
            <time title="29 de Abril de 2023 às 21:40h" dateTime='2023-04-29 21:40:30'>Cerca de 1h atrás</time>
          </div>

          <button title='Deletar comentário'>
            <Trash size={24} />
          </button>
        </header>
        <p>{content}</p>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
    </div>
  )
}