import React from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'

const ShoppingCart = () => {
    const products = [
        {
            name: 'Ürün 1',
            price: 10,
            quantity: 2,
            details: {
                image: 'urun1.jpg',
                size: 'M'
            }
        },
        {
            name: 'Ürün 2',
            price: 15,
            quantity: 1,
            details: {
                image: 'urun2.jpg',
                size: 'L'
            }
        },
        {
            name: 'Ürün 3',
            price: 20,
            quantity: 3,
            details: {
                image: 'urun3.jpg',
                size: 'S'
            }
        }
    ];

    return (
        <div>
            <Header />
            <HeaderBar />
            <Breadcrumbs
                title="Shopping Cart" />

            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td><img src={product.details.image} alt={product.name} /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price * product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ShoppingCart