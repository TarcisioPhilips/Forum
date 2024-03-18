import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'


export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/TarcisioPhilips.png'/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Tarcisio Philips</strong>
                            <time title="11 de Maio às 08:13" dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p> Muito bom cara, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}