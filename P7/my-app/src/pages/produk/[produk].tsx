import { useRouter } from "next/router";
import Link from "next/link";

const DetailProduk = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = {
    id,
    name: `Produk ${id}`,
    price: 50000 * Number(id),
    description:
      "Produk berkualitas tinggi dengan desain modern dan harga terjangkau. Cocok untuk kebutuhan sehari-hari.",
    image: `https://picsum.photos/500/400?random=${id}`,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
        
        {/* Gambar */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detail */}
        <div className="md:w-1/2 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            <p className="text-2xl font-semibold text-blue-600 mb-6">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Beli Sekarang
            </button>

            <Link href="/produk">
              <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                Kembali
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailProduk;