import React, { useState } from "react";
import products from "./products";

const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: 900, margin: '0 auto', padding: 24, background: '#39FF14', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 32 }}>🎮</span> Listado de Productos de Videojuegos
      </h1>
      <div style={{ marginBottom: 24 }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              marginRight: 8,
              padding: '8px 16px',
              background: selectedCategory === cat ? '#1976d2' : '#eee',
              color: selectedCategory === cat ? '#fff' : '#222',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: selectedCategory === cat ? 'bold' : 'normal',
              boxShadow: selectedCategory === cat ? '0 0 8px red' : 'none'
            }}
          >
            <span style={{ color: 'red', marginRight: 4 }}>🕹️</span>{cat}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '2px solid red', borderRadius: 8, width: 260, padding: 16, background: '#fff', boxShadow: '0 0 12px #39FF14' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 140, objectFit: 'contain', marginBottom: 12, border: '2px solid red', borderRadius: 6 }} />
            <h2 style={{ fontSize: 20, margin: '8px 0', color: 'red', display: 'flex', alignItems: 'center', gap: 4 }}><span>🕹️</span>{product.name}</h2>
            <p style={{ color: '#555', minHeight: 40 }}>{product.description}</p>
            <div style={{ fontWeight: 'bold', margin: '8px 0', color: 'red' }}>${product.price.toFixed(2)}</div>
            <div style={{ fontSize: 14, color: '#888' }}>{product.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
