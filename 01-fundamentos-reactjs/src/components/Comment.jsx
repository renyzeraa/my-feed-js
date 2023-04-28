import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/renyzeraa.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Renan Silva</strong>
                            <time
                                title="25 de Março de 2023 ás 12:15h"
                                dateTime="2023-03-25 12:15:44"
                            >
                                Cerca de 1hr atrás
                            </time>
                        </div>
                        <button title="Remover comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp /> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
