import Image from "next/image";
import styles from "./about.module.css";


const AboutPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>
            Συλλογος /name\ 
          </h2>
          <h1 className={styles.title}>
             Περιγραφη Συλλογου
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione facere impedit ipsam, 
            placeat maiores ea nostrum quisquam harum modi ipsa quis voluptatem doloremque perferendis optio quos amet incidunt a.    
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione facere impedit ipsam, 
            placeat maiores ea nostrum quisquam harum modi ipsa quis voluptatem doloremque perferendis optio quos amet incidunt a.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10K+</h1>
              <p>Συλλογοι</p>
            </div>
            <div className={styles.box}>
              <h1>156K+</h1>
              <p>Aθλητές</p>
            </div>
            <div className={styles.box}>
              <h1>5K+</h1>
              <p>Δραστηριότητες</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/images/dojang-js-logo-white-transparent.png"
            alt="picture of the About page"
            fill
            className={styles.img}
          />

          
        </div>
    </div>  
  );
};

export default AboutPage;