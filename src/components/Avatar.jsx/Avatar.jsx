import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true  , src}) {
  

  return (
    <img
      className={hasBorder ? styles.avatarWIthBorder : styles.avatar}
      src={src}
      alt="Imagem de Perfil"
    />
  );
}
