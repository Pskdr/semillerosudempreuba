import styles from './Title.module.css';

const Title = ({ title }) => (
  <div className={styles.blueBackground}>
    <p className={styles.text}>{title}</p>
  </div>
);

export default Title;
