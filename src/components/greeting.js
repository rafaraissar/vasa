import styles from "./greeting.module.css";

export default function Greeting() {
  return (
    <>
      <div className={styles.greetingwrapper}>
        <h1>Hi, you found us!</h1>
        <p>
          Across the vast expanse of space and the passage of time, our paths
          serendipitously intertwined, leading us to this moment. We are
          thrilled that our work has captivated your attention.
          <br /> <br />
          Our passion for photography and videography enables us to capture the
          depth and intimacy of each precious experience, ensuring that the true
          essence and emotions of every sacred moment are beautifully preserved.
          <br /> <br />
        </p>
        <hr />
      </div>
    </>
  );
}
