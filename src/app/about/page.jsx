import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="/images/dojang-js-logo-white-transparent.png" alt="About Page" fill/>
      </div>  
    </div>
  );
};

export default AboutPage;