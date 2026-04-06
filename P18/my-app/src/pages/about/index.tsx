import Head from "next/head";
import Link from "next/link";

const mainStyle = {
  padding: "40px",
  fontFamily: "Arial",
};

const biodataStyle = {
  marginTop: "20px",
};

const backLinkWrapperStyle = {
  marginTop: "30px",
};

export default function About() {
  return (
    <>
      <Head>
        <title>About | Next.js App</title>
      </Head>

      <main style={mainStyle}>
        <h1>Halaman About</h1>

        <div style={biodataStyle}>
          <p>
            <strong>Nama Mahasiswa:</strong> Vanessa Cristin Natalia
          </p>
          <p>
            <strong>NIM:</strong> 2341720026
          </p>
          <p>
            <strong>Program Studi:</strong> D4 Teknik Informatika
          </p>
        </div>

        <div style={backLinkWrapperStyle}>
          <Link href="/">← Kembali ke Halaman Utama</Link>
        </div>
      </main>
    </>
  );
}
