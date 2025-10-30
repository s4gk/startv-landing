import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__column"]}>
          <h3 className={styles["footer__title"]}>Star TV</h3>
          <p className={styles["footer__text"]}>
            Start TV es una empresa casanareña dedicada a las telecomunicaciones,
            desarrollo de sistemas, infraestructura tecnológica y servicios de internet,
            comprometida con la innovación y la conectividad.
          </p>
        </div>

        <div className={styles["footer__column"]}>
          <h3 className={styles["footer__title"]}>Política de Calidad</h3>
          <p className={styles["footer__text"]}>
            Start TV se encuentra comprometido con el control y la seguridad de la información,
            garantizando la confidencialidad, integridad y disponibilidad de los activos de la organización.
          </p>
        </div>

        <div className={styles["footer__column"]}>
          <h3 className={styles["footer__title"]}>Datos de Contacto</h3>
          <p className={styles["footer__text"]}>
            <strong>Teléfono:</strong><br />
            +57 301 6481791
          </p>
          <p className={styles["footer__text"]}>
            <strong>Correo Electrónico:</strong><br />
            startv@gmail.com
          </p>
          <p className={styles["footer__text"]}>
            <strong>Dirección:</strong><br />
            Departamento – Ciudad
          </p>
        </div>
      </div>

      <div className={styles["footer__copy"]}>
        <p>Todos los Derechos Reservados | Start TV. Copyright © 2025</p>
      </div>
    </footer>
  );
}
