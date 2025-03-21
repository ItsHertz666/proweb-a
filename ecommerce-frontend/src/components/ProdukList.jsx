import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProdukList({ refreshTrigger }) {
    const [produk, setProduk] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [editingProduct, setEditingProduct] = useState(null);
    const [editForm, setEditForm] = useState({
        nama: '',
        harga: ''
    });
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
        setEditForm({
            nama: product.nama,
            harga: product.harga
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/produk/${editingProduct.id}`, editForm);
            fetchProduk();
            setEditingProduct(null); // Tutup modal
        } catch (error) {
            console.error('Error mengupdate produk:', error);
        }
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
                                            className="btn btn-warning btn-sm me-2 text-white"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal Edit */}
                <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editModalLabel">Edit Produk</h5>
                            </div>
                            <form onSubmit={handleUpdate}>
                                <div className="modal-body">
                                    <div className="form-container">
                                        <div className="form-group mb-3">
                                            <label htmlFor="nama" className="form-label">Nama Produk</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nama"
                                                value={editForm.nama}
                                                onChange={(e) => setEditForm({...editForm, nama: e.target.value})}
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="harga" className="form-label">Harga</label>
                                            <div className="input-group">
                                                <span className="input-group-text">Rp</span>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="harga"
                                                    value={editForm.harga}
                                                    onChange={(e) => setEditForm({...editForm, harga: e.target.value})}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="form-group">
                                        <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">
                                            Batal
                                        </button>
                                        <button type="submit" className="btn btn-primary">
                                            Simpan Perubahan
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProdukList; 