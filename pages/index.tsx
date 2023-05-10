import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Your <span className="text-6xl font-bold ">Next.JS</span> boilerplate
      </h1>
      <Image
        src="/assets/images/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </>
  );
}
