import { useRouter } from "next/router";

const ProductId :  React.FC<any> = ({product}) => {
    const router = useRouter();
    const Id = router.query.prodId
    return (
        <div>
            Enter {Id}
            {product.id}
        </div>
    );
}

export default ProductId;
export async function getStaticPaths() {
    return {
      paths: [
        { params: { prodId: 'product-1' } },
        { params: { prodId: 'product-2' } },
        { params: { prodId: 'product-3' } },
      ],
      fallback: false,
    };
  }
export async function getStaticProps() {
    const response = await fetch('https://dummyjson.com/products/1')
    const product = await response.json();
    console.log({props: { product }});
    return { props: { product } };
}