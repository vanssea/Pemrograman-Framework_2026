import Link from "next/link";

const ProdukMain = () => {
  const products = [
    { id: 1, name: 'Produk 1', price: 50000 },
    { id: 2, name: 'Produk 2', price: 75000 },
    { id: 3, name: 'Produk 3', price: 100000 },
    { id: 4, name: 'Produk 4', price: 125000 },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Daftar Produk
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={`https://picsum.photos/200/200?random=${product.id}`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-blue-600 font-bold mb-4">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>

                <Link href={`/produk/${product.id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Lihat Detail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdukMain;