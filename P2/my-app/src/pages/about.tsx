import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Next.js App</title>
      </Head>

      <main style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>Ini Halaman About</h1>

        <div style={{ marginTop: "30px" }}>
          <Link href="/">
            ← Kembali ke Halaman Utama
          </Link>
        </div>
      </main>
    </>
  );
}
