import styles from "./banner.module.css";
import Image from "next/image";
import banner from "../../public/banner.jpg";

export default function Banner() {
  return (
    <>
      <div className={styles.bannerwrapper}>
        <Image
          alt="Mountains"
          src={banner}
          placeholder="blur"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
