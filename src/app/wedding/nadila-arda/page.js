"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import styles from "./weddingdetail.module.css";
import Image from "next/image";
import photo from "../../../data/wedding/nadila-arda";
import banner from "../../../../public/wedding/banner.jpg";

export default function Weddingdetail() {
  const router = useRouter();
  const pathname = usePathname();
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
      <div className={styles.contentwrapper}>
        <div className={styles.blue}></div>
        <div className={styles.homespace}></div>
        <div className={styles.homecontent}>
          <div className={styles.judulporto}>
            <h1>Nadhila - Alivio.</h1>
          </div>
          <div className={styles.imageporto}>
            {photo.map((image) => {
              return (
                <div className={styles.imageportodetail} key={image.link}>
                  <Image
                    src={image.image}
                    className={styles.imageportoimage}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
