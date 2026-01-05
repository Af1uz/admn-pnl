import React from 'react';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react'; // Ikonkalar uchun

const HomePage = () => {
  // Statistika ma'lumotlari (bularni backenddan olishingiz mumkin)
  const stats = [
    { id: 1, title: "Jami foydalanuvchilar", value: "1,250", icon: <Users size={24} />, color: "blue" },
    { id: 2, title: "Yangi buyurtmalar", value: "+45", icon: <ShoppingCart size={24} />, color: "green" },
    { id: 3, title: "Oylik tushum", value: "$12,400", icon: <DollarSign size={24} />, color: "purple" },
    { id: 4, title: "O'sish ko'rsatkichi", value: "15%", icon: <TrendingUp size={24} />, color: "orange" },
  ];

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header qismi */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a202c', margin: 0 }}>
          Welcome Admin 👋
        </h2>
        <p style={{ color: '#718096', marginTop: '5px' }}>
          Dashboardning bugungi holati va asosiy ko'rsatkichlar
        </p>
      </div>

      {/* Statistika kartochkalari */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '20px' 
      }}>
        {stats.map((item) => (
          <div key={item.id} style={cardStyle}>
            <div style={{ 
              backgroundColor: `${item.color}15`, 
              padding: '12px', 
              borderRadius: '12px', 
              color: item.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {item.icon}
            </div>
            <div style={{ marginLeft: '15px' }}>
              <p style={{ margin: 0, color: '#718096', fontSize: '14px' }}>{item.title}</p>
              <h3 style={{ margin: '5px 0 0', fontSize: '20px', fontWeight: 'bold', color: '#2d3748' }}>
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Qo'shimcha qism (Masalan: Oxirgi faoliyatlar) */}
      <div style={{ ...cardStyle, marginTop: '30px', display: 'block' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Oxirgi faoliyatlar</h3>
        <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '15px' }}>
          <p style={{ color: '#4a5568' }}>Hozircha ma'lumotlar mavjud emas...</p>
        </div>
      </div>
    </div>
  );
};

// Kartochka uchun umumiy stil
const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 0.2s ease',
};

export default HomePage;