import Link from "next/link";
import { useRouter } from "next/router";
import styles from './register.module.scss';

const TampilanRegister = () => {
  const { push } = useRouter();

  const handleRegister = () => {
    push('/produk');
  }

  return (
    <div className={styles.register}>
      <h1 className={`${styles.title} text-3xl font-bold text-blue-600`}>Halaman Register</h1>
      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Konfirmasi Password:</label>
          <input type="password" id="confirmPassword" required />
        </div>
        <button type="submit" className={styles.button}>Register</button>
      </form>
      <h1 style={{ color: "blue", border: "1px solid blue", borderRadius: "5px", padding: "5px" }}>
        sudah punya akun
      </h1>
      <Link href={"/auth/login"}>Ke Halaman Login</Link>
    </div>
  );
}

export default TampilanRegister;
