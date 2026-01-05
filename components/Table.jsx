import axios from 'axios'
import React, { useState } from 'react'
import Modal from './Modal'
import UpdateM from './UpdateModal'

const Table = ({ product }) => {
    const [openModal, setopenModal] = useState(false)
    const [updateModal, setupdateModal] = useState(false)
    const [updateId, setupdateId] = useState(0)

    const handleOpenModal = () => {
        setopenModal(true)
    }

    const deletedProduct = async (id) => {
        if (window.confirm('Ishonchingiz komilmi ')) {
            const request = await axios.delete(`https://fakestoreapi.com/products/${id}`)
            alert("Muffaqiyatli o'chirildi")
        } else {
            alert("O'chirish faolsizlantirildi")
        }
    }

    return (
        <div style={containerStyle}>
            {/* ADD BUTTON SECTION */}
            <div style={topBar}>
                <h2 style={{margin: 0, color: '#1a202c'}}>Mahsulotlar Boshqaruvi</h2>
                <button onClick={handleOpenModal} style={addBtnStyle}>
                    + Add Product
                </button>
            </div>

            {openModal ? <Modal setopenModal={setopenModal} /> : null}

            {updateModal ? <UpdateM updateId={updateId} setupdateModal={setupdateModal} /> : null}

            {/* TABLE SECTION */}
            <div style={tableWrapper}>
                <table style={mainTable}>
                    <thead style={theadStyle}>
                        <tr>
                            <th style={thStyle}>TR</th>
                            <th style={thStyle}>Title</th>
                            <th style={thStyle}>Category</th>
                            <th style={thStyle}>Description</th>
                            <th style={thStyle}>Price</th>
                            <th style={thStyle}>Image</th>
                            <th style={thStyle}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.length ? (
                            product.map(({ title, id, price, description, image, category }, index) => (
                                <tr key={id} style={trStyle}>
                                    <td style={tdStyle}>{id}</td>
                                    <td style={{...tdStyle, fontWeight: '500'}}>{title.slice(0, 20)}...</td>
                                    <td style={tdStyle}>
                                        <span style={categoryBadge}>{category}</span>
                                    </td>
                                    <td style={{...tdStyle, color: '#718096'}}>{description.slice(0, 50)}...</td>
                                    <td style={{...tdStyle, fontWeight: 'bold'}}>${price}</td>
                                    <td style={tdStyle}>
                                        <img src={image} style={imgStyle} alt="product" />
                                    </td>
                                    <td style={tdStyle}>
                                        <div style={btnGroup}>
                                            <button style={viewBtn}>View</button>
                                            <button style={editBtn} onClick={() => {
                                                setupdateId(id)
                                                setupdateModal(true)
                                            }}>Edit</button>
                                            <button style={deleteBtn} onClick={() => {
                                                deletedProduct(id)
                                            }}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="7" style={{textAlign: 'center', padding: '20px'}}>Data not found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// --- STYLES ---
const containerStyle = { padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f7fafc', minHeight: '100vh' };
const topBar = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' };
const addBtnStyle = { backgroundColor: '#4c51bf', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const tableWrapper = { backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden' };
const mainTable = { width: '100%', borderCollapse: 'collapse', textAlign: 'left' };
const theadStyle = { backgroundColor: '#edf2f7', color: '#4a5568' };
const thStyle = { padding: '15px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' };
const tdStyle = { padding: '15px', borderBottom: '1px solid #edf2f7', fontSize: '14px' };
const trStyle = { transition: '0.2s' };
const imgStyle = { width: '50px', height: '50px', objectFit: 'contain', borderRadius: '4px' };
const categoryBadge = { backgroundColor: '#e2e8f0', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' };
const btnGroup = { display: 'flex', gap: '5px' };
const viewBtn = { backgroundColor: '#ebf8ff', color: '#3182ce', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' };
const editBtn = { backgroundColor: '#f0fff4', color: '#38a169', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' };
const deleteBtn = { backgroundColor: '#fff5f5', color: '#e53e3e', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' };

export default Table;