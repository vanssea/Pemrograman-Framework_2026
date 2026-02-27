import styles from './produk.module.scss';

const ProdukHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Produk Terbaik Kami</h1>
        <p className={styles.heroSubtitle}>Koleksi lengkap produk berkualitas dengan harga terjangkau</p>
      </div>
    </section>
  );
};

export default ProdukHero;
