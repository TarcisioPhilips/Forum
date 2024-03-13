import {Post} from "./Post"
import { Header } from "./components/Header"
import './styles.css'
export function App() {
  return (
    <div>
      <Header/>

      <Post 
        author="Tarcisio Philips" 
        content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum, laboriosam nostrum voluptate praesentium quae necessitatibus eum ipsum natus tenetur commodi ullam eligendi rerum inventore accusamus deleniti provident debitis facilis!" 
      />
      <Post 
        author="Tarcisio gameplay" 
        content= "Novo Post" 
      />
    </div>
  )
}

