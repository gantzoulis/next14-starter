import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Powered by Dojang-JS</div>
      <div className={styles.text}>Enter the Dojang</div>
    </div>
  )
}

export default Footer