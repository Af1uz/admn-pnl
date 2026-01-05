import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AboutPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // API dan ma'lumot olish
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Xatolik:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={containerStyle}>
      
      <div style={topBar}>
        <div>
          <h2 style={{ margin: 0, color: '#1a202c' }}>Foydalanuvchilar Boshqaruvi</h2>
          <p style={{ margin: '5px 0 0', color: '#718096', fontSize: '14px' }}>
            Tizimdagi barcha foydalanuvchilar ma'lumotlari
          </p>
        </div>
        <button style={addBtnStyle}>+ Add User</button>
      </div>

      {/* TABLE SECTION */}
      <div style={tableWrapper}>
        <table style={mainTable}>
          <thead style={theadStyle}>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Username</th>
              <th style={thStyle}>Ism va Familiya</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Shahar</th>
              <th style={thStyle}>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>Yuklanmoqda...</td></tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} style={trStyle}>
                  <td style={tdStyle}>{user.id}</td>
                  <td style={{ ...tdStyle, fontWeight: '600', color: '#4c51bf' }}>
                    @{user.username}
                  </td>
                  <td style={{ ...tdStyle, fontWeight: '500', textTransform: 'capitalize' }}>
                    {user.name.firstname} {user.name.lastname}
                  </td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>
                    <span style={categoryBadge}>{user.address.city}</span>
                  </td>
                  <td style={tdStyle}>
                    {/* Tugmalar guruhi - Table komponentingizdagi kabi */}
                    <div style={btnGroup}>
                      <button style={viewBtn}>View</button>
                      <button style={editBtn}>Edit</button>
                      <button style={deleteBtn} onClick={() => {
                        if(window.confirm('Foydalanuvchini o\'chirmoqchimisiz?')) {
                          alert('O\'chirildi');
                        }
                      }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// --- STYLES (Table komponentingiz bilan bir xil) ---
const containerStyle = { padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f7fafc', minHeight: '100vh' };
const topBar = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' };
const addBtnStyle = { backgroundColor: '#4c51bf', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const tableWrapper = { backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden' };
const mainTable = { width: '100%', borderCollapse: 'collapse', textAlign: 'left' };
const theadStyle = { backgroundColor: '#edf2f7', color: '#4a5568' };
const thStyle = { padding: '15px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' };
const tdStyle = { padding: '15px', borderBottom: '1px solid #edf2f7', fontSize: '14px' };
const trStyle = { transition: '0.2s' };
const categoryBadge = { backgroundColor: '#e2e8f0', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', textTransform: 'capitalize' };
const btnGroup = { display: 'flex', gap: '5px' };
const viewBtn = { backgroundColor: '#ebf8ff', color: '#3182ce', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' };
const editBtn = { backgroundColor: '#f0fff4', color: '#38a169', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' };
const deleteBtn = { backgroundColor: '#fff5f5', color: '#e53e3e', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' };

export default AboutPage;