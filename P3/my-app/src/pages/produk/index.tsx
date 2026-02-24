import { useRouter } from "next/router";
import { useEffect } from "react";

const produk = () => {
  const { push } = useRouter();
  
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      push('/auth/login');
    }
  }, [push]);

  return (
    <div>Produk User Page</div>
  );
};

export default produk;
