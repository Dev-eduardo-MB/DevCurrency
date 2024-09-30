import styles from './notfound.module.css';

export function Notfound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.msgNotFound}>Página 404, está página não existe!</h1>
    </div>
  )
}