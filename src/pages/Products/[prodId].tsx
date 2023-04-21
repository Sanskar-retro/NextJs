import { ProductModel } from "@/Model/Product";
import { Button } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "primereact/card";
import { Galleria } from "primereact/galleria";
import { Rating } from "primereact/rating";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from '../../features/cart';

function prodId() {
  const styles = {
    width: "50%",
    height: "auto",
  };
  //eslint-disable-next-line
  const dispatch = useDispatch();
  let currentProduct: ProductModel = {};
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [product, setProduct] = useState(currentProduct);

  const getProduct = async () => {
    if (router.query.prodId) {
      const data = await axios.get(
        `https://dummyjson.com/products/${router.query.prodId}`
      );
      setProduct(data.data);
    }
  };
  const thumbnailTemplate = (item: any) => {
    return <Image src={item} alt="No Image" width={200} height={100} />;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getProduct();
  }, [router.query.prodId]);
  return (
    <div className="p-2">
      <Card
        className="p-2"
        header={
          <Galleria
            style={styles}
            className="w-3/6"
            value={product.images}
            numVisible={1}
            thumbnail={thumbnailTemplate}
            itemNextIcon={<i className="pi pi-chevron-right"></i>}
            itemPrevIcon={<i className="pi pi-chevron-left"></i>}
            nextThumbnailIcon={<i className="pi pi-chevron-right"></i>}
            prevThumbnailIcon={<i className="pi pi-chevron-left"></i>}
          />
        }
        title={product.title}
        subTitle={product.description}
      >
        <p>
          Price - $ {product.price}
          <br />
          discount - {product.discountPercentage} %
          <br />
        </p>
        <Rating value={product.rating} readOnly cancel={false} />
        <br />
        <div className="flex flex-wrap justify-evenly">
            <Button className="m-2" onClick={()=>{
                dispatch(addtoCart(product))
            }}> Add to Cart </Button>

            <Button className="m-2"> Shop Now </Button>
        </div>
      </Card>
    </div>
  );
}

export default prodId;
