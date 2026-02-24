import Link from "next/link";
import { useRouter } from "next/router";

const halamanRegister = () => {
  const { push } = useRouter();
  const handlerRegister = () => {
    // logic register disini
    push('/produk');
  }

  return (
    <div>
      <h1>Halaman Register</h1>
      <button onClick={handlerRegister}>Register</button> <br />
      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default halamanRegister;
