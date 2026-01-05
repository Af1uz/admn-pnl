import axios, { Axios } from 'axios'
import React, { useState } from 'react'

const Modal = ({setopenModal}) => {

    const [formData, setFormData] = useState({
        title : "", 
        price : 0,
        description : "",
        category : "",
        image : "",
    })

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
            [e.target.name] : e.target.value
            }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = await axios.post('https://fakestoreapi.com/products', formData)
        
        if(request.status === 200 || request.status === 201){
          alert("Successful created")
          setopenModal(false) // Muvaffaqiyatli bo'lsa oynani yopish
        }else{
          alert("Error created")
        }
    }

  return (
    <div style={overlayStyle}>
      <div style={modalCardStyle}>
        <h2 style={titleStyle}>Yangi mahsulot qo'shish</h2>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroup}>
            <label style={labelStyle}>Sarlavha</label>
            <input onChange={handleChange} name='title' value={formData.title} type="text" placeholder='Masalan: Apple iPhone 15' style={inputStyle} required />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Narxi ($)</label>
            <input onChange={handleChange} name='price' value={formData.price} type="number" placeholder='price' style={inputStyle} required />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Tavsif</label>
            <input onChange={handleChange} name='description' value={formData.description} type="text" placeholder='Mahsulot haqida batafsil...' style={inputStyle} required />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Kategoriya</label>
            <input onChange={handleChange} name='category' value={formData.category} type="text" placeholder='category' style={inputStyle} required />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Rasm manzili (URL)</label>
            <input onChange={handleChange} name='image' value={formData.image} type="url" placeholder='https://example.com/image.jpg' style={inputStyle} required />
          </div>

          <div style={btnContainer}>
            <button type="button" onClick={()=> setopenModal(false)} style={cancelBtnStyle}>
              Cancel
            </button>
            <button type="submit" style={submitBtnStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// --- MODAL STYLES ---

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Orqa fonni xiralashtirish
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(4px)' // Zamonaviy effekt
};

const modalCardStyle = {
  backgroundColor: '#fff',
  width: '100%',
  maxWidth: '450px',
  padding: '30px',
  borderRadius: '16px',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  animation: 'scaleIn 0.3s ease'
};

const titleStyle = {
  marginTop: 0,
  marginBottom: '20px',
  fontSize: '22px',
  fontWeight: '700',
  color: '#1a202c',
  textAlign: 'center'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const inputGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px'
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#4a5568'
};

const inputStyle = {
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const btnContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  marginTop: '10px'
};

const cancelBtnStyle = {
  padding: '10px 20px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontWeight: '600',
  color: '#4a5568'
};

const submitBtnStyle = {
  padding: '10px 24px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#4c51bf',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: '600',
  boxShadow: '0 4px 6px rgba(76, 81, 191, 0.2)'
};

export default Modal