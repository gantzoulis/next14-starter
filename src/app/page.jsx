import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Διαχειρηση Συλλόγου Πολεμικων Τεχνων</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Obcaecati quos velit, praesentium voluptatibus in quod dolorum at sint iusto blanditiis aut natus earum corrupti qui odio vero quo
            placeat optio!
          </p>
          <div className={styles.buttons}>
              <button className={styles.button}>Εγγραφή</button>
              <button className={styles.button}>Δοκιμή</button>
          </div>
          <div className={styles.brands}>
              <Image src="/images/brands.png" fill className={styles.brandsImage} alt=""/>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/images/dojang-js-logo-white-transparent.png" fill className={styles.dojangImage} alt=""/>
        </div>
    </div>
  

  );
  
};

export default Home;