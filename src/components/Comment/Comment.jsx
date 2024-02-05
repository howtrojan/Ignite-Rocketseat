import { Avatar } from "../Avatar.jsx/Avatar";
import styles from "./Comment.module.css";
import { FaRegTrashAlt, FaRegThumbsUp } from "react-icons/fa";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <time
              title="04 de Fevereiro as 19:55"
              dateTime="2024-04-02 19:56:00"
            >
              Cerca de 1h atraz
            </time>
          </div>

          <button title="Deletar comentário">
            <FaRegTrashAlt size={24} />
          </button>
        </header>
       

        <p>Muito bom. parabens!! </p>
        </div>

        <footer>
          <button>
            <FaRegThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
