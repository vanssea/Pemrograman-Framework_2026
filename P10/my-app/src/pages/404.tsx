import Head from "next/head";
import styles from "../styles/404.module.scss";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta
          name="description"
          content="Maaf, halaman yang kamu cari tidak tersedia."
        />
      </Head>

      <div className={styles.error}>
        <img
          src="/page-not-found.png"
          alt="404"
          className={styles.error__image}
        />

        <h1 className={styles.error__title}>Oops! 404</h1>

        <p className={styles.error__desc}>
          Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.
        </p>

        <Link href="/" className={styles.error__button}>
          Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}