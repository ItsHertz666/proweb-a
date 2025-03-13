import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProdukList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/produk');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="products-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.nama}</h3>
                    <p className="price">Rp {parseInt(product.harga).toLocaleString('id-ID')}</p>
                </div>
            ))}
        </div>
    );
}

export default ProdukList;
