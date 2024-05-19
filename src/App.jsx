// named export evita problemas na importação dos arquivos
import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

import './global.css'
import styles from './App.module.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/renyzeraa.png',
            name: 'Renan Silva',
            role: 'Desenvolvedor frontend @IPMSistemas'
        },
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            { type: 'link', content: 'jane.design/doctorcare' }
        ],
        publishedAt: new Date('2022-05-03 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Mayk Brito',
            role: 'CCO @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala DEV !!!' },
            {
                type: 'paragraph',
                content:
                    'Lancei uma aula nova la no explorer e queria convidar vocês para ver ela, tem conteúdo fresquinho e de qualidade.'
            },
            { type: 'link', content: 'maykbrito.com/teste' }
        ],
        publishedAt: new Date('2023-02-04 13:15:00')
    }
]

// named export
export function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar></Sidebar>
                <main>
                    {posts.map(oPost => {
                        return (
                            <Post
                                key={oPost.id}
                                author={oPost.author}
                                content={oPost.content}
                                publishedAt={oPost.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </>
    )
}
