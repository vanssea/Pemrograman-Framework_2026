import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  useEffect(() => {
    if (error) push("/404");
    if (data?.data) setProducts(data.data);
  }, [data, error, push]);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : products} />
    </div>
  );
};

export default kategori;