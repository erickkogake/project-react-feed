import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img
                    className={styles.cover}
                    src="https://images.unsplash.com/photo-1641214069135-d284af139807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                    alt='Capa'>
                </img>
                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://github.com/erickkogake.png"></img>
                    <strong>Erick Kogake</strong>
                    <span>Web Developer</span>
                </div>
                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar perfil
                    </a>
                </footer>
            </aside>
        </>
    )
}