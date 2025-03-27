import React, { useState } from 'react';
import axios from 'axios';

function EditProduk({ product, onUpdate, onClose }) {
    const [editForm, setEditForm] = useState({
        nama: product.nama,
        harga: product.harga
    });

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/produk/${product.id}`, editForm);
            onUpdate();
            onClose();
        } catch (error) {
            console.error('Error mengupdate produk:', error);
        }
    };

    return (
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
                                <button type="button" className="btn btn-cancel me-2" data-bs-dismiss="modal">
                                    <i className="fas fa-times"></i> Batal
                                </button>
                                <button type="submit" className="btn btn-save">
                                    <i className="fas fa-save"></i> Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProduk; 