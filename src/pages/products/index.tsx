import { useEffect, useState } from "react";
import axios from "axios";
import Product from "@/components/Product";
import { ProductModel } from "@/Model/Product";
import { ProgressSpinner } from "primereact/progressspinner";
import { InputText } from "primereact/inputtext";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [productsCopy, setProductsCopy] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchProducts, setSearchProducts] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getProducts();
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let a = productsCopy.filter((product: any) => {
      if (product?.title.includes(searchProducts)) {
        return product;
      }
    });
    setProducts(a);
  }, [searchProducts]);

  const getProducts = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    setProducts(data.data.products);
    setProductsCopy(data.data.products);
  };

  return (
    <>
      <div className="m-4 w-full">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Search"
            value={searchProducts}
            onChange={(e) => {
              setSearchProducts(e.target.value);
            }}
          />
        </span>
      </div>
      {products ? (
        <div className="flex flex-wrap">
          {products.map((product: ProductModel) => {
            return (
              <>
                <Product product={product} />
              </>
            );
          })}
        </div>
      ) : (
        <>
          <ProgressSpinner />
        </>
      )}
    </>
  );
}

export default index;
