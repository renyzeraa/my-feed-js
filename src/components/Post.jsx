import { useState } from 'react'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ id, author, content, publishedAt }) {
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')
    const publishedDateFormated = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR }
    )
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(oEv) {
        oEv.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(oEv) {
        oEv.target.setCustomValidity('')
        setNewCommentText(oEv.target.value)
    }

    function deleteComment(commentToDelete) {
        // não deve sofrer mutação, imutabilidade
        const newComments = comments.filter(comment => {
            return commentToDelete !== comment
        })
        setComments(newComments)
    }

    function handleCreateNewInvalid(oEv) {
        oEv.target.setCustomValidity('Este campo é obrigatório')
    }

    const bEmptyComment = newCommentText.length === 0

    return (
        <article className={styles.post} data-id={id}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormated}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((oContent, idx) => {
                    if (oContent.type === 'paragraph') {
                        return <p key={idx}>{oContent.content}</p>
                    } else if (oContent.type === 'link') {
                        return (
                            <p key={idx}>
                                <a href="#">{oContent.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    onChange={handleNewCommentChange}
                    placeholder="Deixe seu comentário!"
                    value={newCommentText}
                    onInvalid={handleCreateNewInvalid}
                    required
                ></textarea>
                <footer>
                    <button type="submit" disabled={bEmptyComment}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            onDeleteComment={deleteComment}
                            content={comment}
                        />
                    )
                })}
            </div>
        </article>
    )
}
