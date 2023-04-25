// named export evita problemas na importação dos arquivos
import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'

import './global.css'

// named export
export function App() {
    return (
        <>
            <Header />
            <Post
                author="Renan Silva"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quaerat eum ipsum soluta. Provident vitae numquam odit sapiente ipsam quas consequuntur facilis sunt. Facilis sunt commodi quaerat ea eius perspiciatis?"
            />
        </>
    )
}
