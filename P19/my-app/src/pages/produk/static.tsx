import TampilanProduk from "../../views/product";
import { ProductType } from "../../types/Product.type";
import { revalidateEvents } from "swr/dist/_internal";

const halamanProdukStatic = (props:{products:ProductType[]}) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products} />
        </div>
    );
};

export default halamanProdukStatic;

export async function getStaticProps() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://127.0.0.1:3000");
    const res = await fetch(`${baseUrl}/api/produk`);
    // const response: ProductType[] = await res.json();
    const response: { data: ProductType[] } = await res.json();

    // console.log("Data produk yang diambil dari API:", response);

    return {
        props: {
            products: response.data,
        },
        revalidate: 10, // Revalidate data setiap 10 detik
    }
}