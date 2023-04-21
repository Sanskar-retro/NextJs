import { ProductModel } from '@/Model/Product';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';

function Product(props : any) {
    const {product} = props;
    console.log(product)
    const header = (
        <Image alt="Card" src={product.thumbnail} width={300} height={300} layout="responsive" className='rounded-md'/>
    );
    const href = `Products/${product.id}`
    return (
        <Link href={href}>
        <div id={product.id} className="w-96 max-h-30 m-4 hover:drop-shadow-lg transition">
            <Card title={product.title} subTitle={product.brand} footer={"$ "+product.price} header={header}>
                <p className="m-0">
                    {product.description}
                </p>
                <br />
                <Rating value={product.rating} readOnly cancel={false} />
            </Card>
        </div>
        </Link>
    );
}

export default Product;