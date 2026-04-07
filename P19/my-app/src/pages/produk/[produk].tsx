import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";
import { getData } from "../../utils/db/servicefirebase";
import { retrieveDataByID } from "../../utils/db/servicefirebase";

const HalamanProduk = ({product}: {product: ProductType}) => {
  {/digunakan client-side rendering/}
  // // const Router = useRouter();

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  )
};

export default HalamanProduk;


{/digunakan server-side rendering/}
export async function getServerSideProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);
  const respone = await res.json();
  // console.log("Data produk yang diambil dari API:", respone);
  return {
    props: {
      product: respone.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}


// {/digunakan static-site generation/}

// export async function getStaticPaths() {
//   const data = await getData("products");

//   const paths = data.map((product: any) => ({
//     params: { produk: product.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: { produk: string } }) {
//   const product = await retrieveDataByID("products", params.produk);

//   return {
//     props: {
//       product,
//     },
//   };
// }