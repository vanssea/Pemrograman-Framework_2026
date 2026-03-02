import styles from "../../produk/product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      <div className={styles.produk__content}>
        {products.map((product: ProductType) => (
          <div key={product.id} className={styles.produk__item}>
            
            <div className={styles.produk__image}>
              <img src={product.image} alt={product.name} />
            </div>

            <h4 className={styles.produk__name}>
              {product.name}
            </h4>

            <p className={styles.produk__category}>
              {product.category}
            </p>

            <p className={styles.produk__price}>
              Rp {product.price.toLocaleString("id-ID")}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TampilanProduk;