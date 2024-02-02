import styles from './Sidebar.module.css'
import avatar from '../../assets/avatar.jpg'

export function Sidebar () {
    return(
        <aside className={styles.sidebar}> 
            <img className={styles.cover} src={avatar} alt="" />

            <div className={styles.profile}>
                <strong>André Braga</strong>
                <span>Web Developer</span>
            </div>           
            <footer>
                <a href="#">
                    Editar seu Perfil
                </a>
            </footer> 
        </aside>
        
    )
}