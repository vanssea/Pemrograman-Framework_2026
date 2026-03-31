import { useRouter } from "next/router";
import Link from "next/link";

const DetailProduk = () => {
  const router = useRouter();
  const { produk } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Halaman Produk
        </h1>

        <p className="text-lg text-gray-700">
          Produk: {produk}
        </p>
      </div>
    </div>
  );
};

export default DetailProduk;