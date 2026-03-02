import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const Kategori1 = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/produk");
      const responseData = await response.json();
      setProducts(responseData.data);
    } catch (error) {
      console.error("Error fetching produk:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Daftar Produk</h1>

      <button onClick={fetchData} style={{ marginBottom: 20 }}>
        Refresh Data
      </button>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <h2>{item.name}</h2>
          <p>Harga: Rp {item.price}</p>
          <p>Ukuran: {item.size}</p>
          <p>Kategori: {item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Kategori1;