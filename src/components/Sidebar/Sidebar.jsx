import styles from "./Sidebar.module.css";
import avatar from "../../assets/avatar.jpg";
import { FaPencilAlt } from "react-icons/fa";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={avatar} alt="" />

      <div className={styles.profile}>
        <img src={"https://github.com/howtrojan.png"} alt="Imagem de Perfil" />
        <strong>André Braga</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <FaPencilAlt />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
