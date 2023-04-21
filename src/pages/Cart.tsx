import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { removeFromCart } from '../features/cart'
function Cart() {
    const cartData = useSelector((state : any)=> state.cart.data);
    const dispatch = useDispatch();
    const imageBodyTemplate = (product : any) => {
        return <Image src={product.thumbnail} alt={product.title} className="w-6rem shadow-2 border-round" width={100} height={100}/>;
    };
    const deleteProduct = (product : any) => {
        return <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" onClick={()=>dispatch(removeFromCart(product))} />;
    };
    return (
        <div>
            <Card>
                <DataTable value={cartData} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="brand" header="Brand"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="title" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="price" header="Price"></Column>
                    <Column body={deleteProduct} header="Delete"></Column>
                </DataTable>
            </Card>
        </div>
    );
}

export default Cart;