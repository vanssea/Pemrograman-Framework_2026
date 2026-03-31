import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const Kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  console.log("DATA:", data);

  if (error) {
    return <div>Gagal memuat data produk.</div>;
  }

  return (
    <div>
      <TampilanProduk products={data?.data || []} />
    </div>
  );
};

export default Kategori;