import styles from "./wedding.module.css";
import Image from "next/image";

import Greeting from "@/components/greeting";
import banner from "../../../public/wedding/banner.jpg";

export default function Wedding() {
  return (
    <>
      <div className={styles.bannerwrapper}>
        <Image
          alt="Mountains"
          src={banner}
          fill
          priority
          placeholder="blur"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.contentwrapper}>
        <div className={styles.blue}></div>
        <div className={styles.homespace}></div>
        <div className={styles.homecontent}>
          <div className={styles.judulporto}>
            <h1>Wedding</h1>
          </div>
          <div className={styles.judulporto}>Weddingggg</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
          <div className={styles.judulporto}>Wedding</div>
        </div>
      </div>
    </>
  );
}
