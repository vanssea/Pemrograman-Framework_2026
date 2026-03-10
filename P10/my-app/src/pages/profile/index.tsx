import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProfilePage() {
  const { push } = useRouter();
  
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      push('/auth/login');
    }
  }, [push]);

  return (
    <div>
      <h1>Halaman Profile</h1>
      <p>Ini adalah halaman profile pengguna.</p>
    </div>
  );
}
