import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Next.js App</title>
      </Head>

      <main style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>Halaman About</h1>

        <div style={{ marginTop: "20px" }}>
          <p><strong>Nama Mahasiswa:</strong> Vanessa Cristin Natalia</p>
          <p><strong>NIM:</strong> 2341720026</p>
          <p><strong>Program Studi:</strong> D4 Teknik Informatika</p>
        </div>

        <div style={{ marginTop: "30px" }}>
          <Link href="/">
            ← Kembali ke Halaman Utama
          </Link>
        </div>
      </main>
    </>
  );
}
