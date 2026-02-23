import Navbar from "../navbar";
import Link from "next/link";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>

      <footer
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {/* About */}
          <div>
            <h3 style={{ marginBottom: "10px" }}>Next Routing App</h3>
            <p style={{ fontSize: "14px", color: "#ccc" }}>
              Project praktikum Pemrograman Framework menggunakan Next.js
              Pages Router.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ marginBottom: "10px" }}>Navigation</h3>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              <li><Link href="/" style={{ color: "#ccc" }}>Home</Link></li>
              <li><Link href="/profile" style={{ color: "#ccc" }}>Profile</Link></li>
              <li><Link href="/blog/nextjs" style={{ color: "#ccc" }}>Blog</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 style={{ marginBottom: "10px" }}>Follow</h3>
            <p style={{ fontSize: "14px", color: "#ccc" }}>
              Instagram | LinkedIn | GitHub
            </p>
          </div>
        </div>

        <hr style={{ margin: "30px 0", borderColor: "#333" }} />

        <p style={{ textAlign: "center", fontSize: "14px", color: "#aaa" }}>
          © {new Date().getFullYear()} Vanessa Cristin Natalia. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default AppShell;
