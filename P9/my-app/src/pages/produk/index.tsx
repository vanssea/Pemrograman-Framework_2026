import TampilanProduk from "../views/product";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  if (error) {
    return <div>Gagal memuat data produk.</div>;
  }

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data ?? []} />
    </div>
  );
};

export default Kategori;
