"use client";

import { useParams, useRouter } from "next/navigation";
const ProductId = () => {
    // const router = 
    const {productId} = useParams();
    return (

        <h1>Details about Product {productId}</h1>
    )
}

export default ProductId;