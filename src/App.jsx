import {Post} from "./Post"
import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Tarcisio Philips" 
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum, laboriosam nostrum voluptate praesentium quae necessitatibus eum ipsum natus tenetur commodi ullam eligendi rerum inventore accusamus deleniti provident debitis facilis!" 
          />
          <Post 
            author="Tarcisio gameplay" 
            content= "Novo Post" 
          />
        </main>
      </div>
    </div>
  )
}

