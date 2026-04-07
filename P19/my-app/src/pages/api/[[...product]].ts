import type { NextApiRequest, NextApiResponse } from "next";
import { getData, retrieveDataByID } from "../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { product } = req.query;

  let productId: string | null = null;

  if (Array.isArray(product)) {
    // 👉 kalau cuma /api/produk → ambil semua
    if (product.length === 1 && product[0] === "produk") {
      productId = null;
    } 
    // 👉 kalau /api/produk/id → ambil id
    else if (product.length > 1) {
      productId = product[product.length - 1];
    } 
    // 👉 kalau /api/id
    else if (product.length === 1) {
      productId = product[0];
    }
  }

  // 🔹 ambil 1 produk
  if (productId) {
    const data = await retrieveDataByID("products", productId);

    if (data) {
      return res.status(200).json({
        status: true,
        status_code: 200,
        data: data,
      });
    }

    return res.status(404).json({
      status: false,
      status_code: 404,
      data: "",
    });
  }

  // 🔹 ambil semua produk
  const allData = await getData("products");

  return res.status(200).json({
    status: true,
    status_code: 200,
    data: allData,
  });
}