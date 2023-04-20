import { useRouter } from "next/router";

function ProductId() {
    const router = useRouter();
    const Id = router.query.prodId
    return (
        <div>
            Enter {Id}
        </div>
    );
}

export default ProductId;