import styles from './Post.module.css'
import { Comment } from './Comment'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/renyzeraa.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Renan Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time
                    title="25 de Março de 2023 ás 12:15h"
                    dataTime="2023-03-25 12:15:44"
                >
                    Publicado a 1hr
                </time>
            </header>

            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>
                    <p>
                        Acabei de subir mais um projeto no meu portifa. É um
                        projeto que fiz no NLW Return, evento da Rocketseat.
                    </p>
                    <p>
                        O nome do projeto é DoctorCare 🚀 👉
                        <a href="#"> jane.design/doctorcare</a>
                    </p>
                    <p>
                        <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a>
                    </p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe seu comentário!"></textarea>
                <footer>
                    <button type="submit">Publicar</button>
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
