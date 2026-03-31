import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditProfilePage() {
  const { push } = useRouter();
  
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      push('/auth/login');
    }
  }, [push]);

  return (
    <div>
      <h1>Edit Profile</h1>
      <p>Silakan ubah data profile Anda di sini.</p>
    </div>
  );
}
