import AddProduct from "./addProduct";
import UpdateProduct from "./updateProduct";
import DeleteProduct from "./deleteProduct";
import { rupiah } from "../utils/FormatUang";
import Navbar from "../components/Navbar";

type Product = {
  id: number;
  name: string;
  price: number;
};

export const metadata = {
  title: "Products",
};

async function getProducts() {
  const req = await fetch(`http://localhost:5000/products`, {
    cache: "no-store",
  });
  return await req.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <h1 className="my-3 font-semibold text-2xl text-slate-700">Products</h1>
        <div className="mb-3">
          <AddProduct />
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{rupiah(product.price)}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      <DeleteProduct {...product} />
                      <UpdateProduct {...product} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
