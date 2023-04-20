import { useEffect, useState } from 'react';
import axios from 'axios';


function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState([]);
    const getProducts = async () =>{
        const data = await axios.get('https://dummyjson.com/products')
        setProducts(data.data);  
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
       getProducts()
    }, [])

    const setProduct = () => {
        if(products){
            products.map(product =>{
                    
            })
        }
    }
    
    return (
        <div>
            {
                
            }
        </div>
    );
}

export default index;