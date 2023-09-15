import styles from "./wedding.module.css";
import Image from "next/image";

import Link from "next/link";
import photo from "../../data/wedding/wedding";
import banner from "../../../public/wedding/banner.jpg";
import EastIcon from "@mui/icons-material/East";
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
            <h1>Weddingg</h1>
          </div>
          <div className={styles.listwedding}>
            {photo.map((image) => {
              return (
                <Link
                  href="/wedding/nadila-arda"
                  className={styles.listweddingitem}
                >
                  <Image
                    src={image.image}
                    className={styles.listweddingitemimage}
                    alt={image.alt}
                    placeholder="blur"
                    blurDataURL={"/loading.gif"}
                    objectFit="cover"
                    fill
                    sizes="100vw"
                  />
                  <div className={styles.listweddingitemtext}>
                    <div className={styles.listweddingitemtextkategori}>
                      Wedding
                    </div>
                    <div className={styles.listweddingitemtextpasangan}>
                      Nasil - jdad
                    </div>
                    <EastIcon className={styles.listweddingitemtexticon} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
