import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditProduk from './EditProduk';

function ProdukList({ refreshTrigger }) {
    const [produk, setProduk] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [editingProduct, setEditingProduct] = useState(null);
    const itemsPerPage = 10;

    const fetchProduk = async () => {
        try {
            const response = await axios.get('http://localhost:3001/produk');
            setProduk(response.data);
        } catch (error) {
            console.error('Error mengambil data produk:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            try {
                await axios.delete(`http://localhost:3001/produk/${id}`);
                fetchProduk();
            } catch (error) {
                console.error('Error menghapus produk:', error);
            }
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleUpdateSuccess = () => {
        fetchProduk();
        setEditingProduct(null);
    };

    useEffect(() => {
        fetchProduk();
    }, [refreshTrigger]);

    const filteredProduk = produk.filter(item =>
        item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.harga.toString().includes(searchTerm)
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProduk.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProduk.length / itemsPerPage);

    return (
        <div className="container mt-4">
            <div className="form-container">
                <h3 className="mb-4">Daftar Produk</h3>
                
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari produk..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th width="5%" className="text-center">No</th>
                                <th width="45%">Nama Produk</th>
                                <th width="30%">Harga</th>
                                <th width="20%" className="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="text-center">{indexOfFirstItem + index + 1}</td>
                                    <td>{item.nama}</td>
                                    <td>Rp {parseInt(item.harga).toLocaleString('id-ID')}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="btn btn-edit me-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                        >
                                            <i className="fas fa-edit"></i> Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-delete"
                                        >
                                            <i className="fas fa-trash"></i> Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {editingProduct && (
                    <EditProduk
                        product={editingProduct}
                        onUpdate={handleUpdateSuccess}
                        onClose={() => setEditingProduct(null)}
                    />
                )}
            </div>
        </div>
    );
}

export default ProdukList; 