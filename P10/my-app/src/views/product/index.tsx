import styles from "../produk/product.module.scss";

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
        {products.length > 0 ? (
          products.map((products: ProductType, index: number) => (
            <div 
              key={products.id} 
              className={styles.produk__content__item}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={products.image} 
                alt={products.name} 
                className={styles.produk__content__item__image}
              />
              <div className={styles.produk__content__item__name}>
                {products.name}
              </div>
              <div className={styles.produk__content__item__category}>
                {products.category}
              </div>
              <div className={styles.produk__content__item__price}>
                Rp {products.price.toLocaleString("id-ID")}
              </div>
            </div>
          ))
        ) : (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={styles.produk__content__item}>
                <div className={styles.produk__content__skeleton__image}></div>
                <div className={styles.produk__content__skeleton__name}></div>
                <div className={styles.produk__content__skeleton__category}></div>
                <div className={styles.produk__content__skeleton__price}></div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;
