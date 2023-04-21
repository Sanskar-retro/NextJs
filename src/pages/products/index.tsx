import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '@/components/Product';
import { ProductModel } from '@/Model/Product';


function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState([]);
    const getProducts = async () =>{
        const data = await axios.get('https://dummyjson.com/products')
        setProducts(data.data.products);  
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
       getProducts()
    }, [])

    
    return (
        <div className='flex flex-wrap'>
            {
                products && products.map((product : ProductModel) =>{
                    console.log(product)
                    return <><Product product={product}/></>
                })
            }
        </div>
    );
}

export default index;