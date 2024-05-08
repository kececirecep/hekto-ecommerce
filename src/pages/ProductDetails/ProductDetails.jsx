import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'

const ProductDetails = () => {
    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="Product Details" />
        </div>
    )
}

export default ProductDetails