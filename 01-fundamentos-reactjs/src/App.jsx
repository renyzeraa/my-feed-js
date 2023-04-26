// named export evita problemas na importação dos arquivos
import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

import './global.css'
import styles from './App.module.css'

// named export
export function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar></Sidebar>
                <main>
                    <Post />
                </main>
            </div>
        </>
    )
}
