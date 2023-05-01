import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <dir className={styles.author}>
            <img src="https://github.com/GuilhermeJSales.png" />
            <div className={styles.authorInfo}>
              <strong>Guilherme Jesus Sales</strong>
              <span>Web Developer</span>
            </div>
        </dir>

        <time title="29 de Abril de 2023 às 21:40h" dateTime='2023-04-29 21:40:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Impulse 🚀</p>
        <p><a href="https://github.com/GuilhermeJSales/nlw-return-impulse-web">Github.com/GuilhermeJSales</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Escreva um comentário'
        /> 

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}