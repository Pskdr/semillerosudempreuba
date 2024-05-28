import styles from './semilleroContent.module.css'

const SemilleroContent = () => (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <span className={styles.sectionTitleIcon}>📘</span> Informacion general
        </div>
        <ul className={styles.list}>
          <li>Información del profesor</li>
          <li>Archivos del curso</li>
          <li>Cronograma</li>
          <li>Plan de trabajo</li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <span className={styles.sectionTitleIcon}>📄</span> Evidencias de aprendizaje
        </div>
        <ul className={styles.list}>
          <li>Foro estudiantes</li>
          <li>Evento evaluativo 1</li>
          <li>Evento evaluativo 2</li>
        </ul>
      </div>
    </div>
  );
  
  export default SemilleroContent;
  