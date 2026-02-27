import Link from "next/link";
import styles from './produk.module.scss';

const ProdukMain = () => {
  const products = [
    { id: 1, name: 'Produk 1', price: 50000 },
    { id: 2, name: 'Produk 2', price: 75000 },
    { id: 3, name: 'Produk 3', price: 100000 },
    { id: 4, name: 'Produk 4', price: 125000 },
  ];

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Daftar Produk</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={`https://picsum.photos/200/200?random=${product.id}`} alt={product.name} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>Rp {product.price.toLocaleString('id-ID')}</p>
                <Link href={`/produk/${product.id}`}>
                  <button className={styles.detailButton}>Lihat Detail</button>
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
