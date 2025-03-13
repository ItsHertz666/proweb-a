import React, { useState } from 'react';
import axios from 'axios';

function ProdukForm({ onProductAdded }) {
  const [formData, setFormData] = useState({
    nama: '',
    harga: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/produk', formData);
      setFormData({ nama: '', harga: '' }); // Reset form
      if (onProductAdded) {
        onProductAdded(response.data);
      }
      alert('Produk berhasil ditambahkan!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Gagal menambahkan produk');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>Tambah Produk Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Nama Produk:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Nama Produk tidak boleh kosong"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="harga">Harga:</label>
          <input
            type="number"
            id="harga"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            placeholder="Harga tidak boleh kosong"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button type="submit" className="button">Tambah Produk</button>
      </form>
    </div>
  );
}

export default ProdukForm; 