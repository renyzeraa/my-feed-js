import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
    const [ likeCount, setLikeCount ] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((count) => count + 1 )
    }

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
                        <button
                            onClick={handleDeleteComment}
                            title="Remover comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp /> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
