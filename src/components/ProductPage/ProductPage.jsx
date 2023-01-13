import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {

    let channel = useParams().channel;
    let id = useParams().id;

    return (
        <div>{id}</div>
    )
}

export default ProductPage