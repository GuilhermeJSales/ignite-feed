import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>    
    <Header />

    <div className={styles.wrapper}>

      <Sidebar />

      <main>
          <Post
            author="Guilherme Jesus Sales"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, illo. Consectetur doloribus facilis dolore repellendus, quis, alias dignissimos ipsa voluptates rem, quos quam explicabo fugit voluptatum! Tempore aperiam officia ducimus."
          />

          <Post
            author="Rosana Jesus Sales"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, illo. Consectetur doloribus facilis dolore repellendus, quis, alias dignissimos ipsa voluptates rem, quos quam explicabo fugit voluptatum! Tempore aperiam officia ducimus."
          />
        </main>
    </div>
   </div>

  )
}



