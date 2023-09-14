import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner";
import Greeting from "@/components/greeting";

export default function Home() {
  return (
    <>
      <Banner />
      <div className={styles.homewrapper}>
        <div className={styles.blue}></div>
        <div className={styles.homespace}></div>
        <div className={styles.homecontent}>
          <Greeting /> <Greeting /> <Greeting /> <Greeting />
        </div>
      </div>
    </>
  );
}
