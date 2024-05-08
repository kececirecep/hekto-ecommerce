import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'

const Products = () => {
    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="Shop Grid Default" />

            <h2>Ecommerce Acceories & Fashion item </h2>
            <h6>About 9,620 results (0.62 seconds)</h6>
        </div>
    )
}

export default Products