import { useRouter } from "next/router";
import { useEffect } from "react";
import ProdukHero from "./ProdukHero";
import ProdukMain from "./ProdukMain";

const TampilanProduk = () => {
  const { push } = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      push('/auth/login');
    }
  }, [push]);

  return (
    <>
      <ProdukHero />
      <ProdukMain />
    </>
  );
};

export default TampilanProduk;
