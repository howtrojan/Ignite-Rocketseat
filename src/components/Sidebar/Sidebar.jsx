import styles from "./Sidebar.module.css";
import avatar from "../../assets/avatar.jpg";
import { FaPencilAlt } from "react-icons/fa";
import { Avatar } from "../Avatar.jsx/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={avatar} alt="" />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://github.com/howtrojan.png"/>
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
