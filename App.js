import React, { useState } from 'react';
import './App.css';

// --- Mock Data ---
// --- Mock Data ---
const productsData = [
  { id: 1, name: "Minimalist Watch", price: 120, image: "https://placehold.co/300x200?text=Watch", category: "Accessories" },
  { id: 2, name: "Leather Bag", price: 85, image: "https://placehold.co/300x200?text=Bag", category: "Fashion" },
  { id: 3, name: "Wireless Headphones", price: 200, image: "https://placehold.co/300x200?text=Headphones", category: "Electronics" },
  { id: 4, name: "Running Shoes", price: 95, image: "https://placehold.co/300x200?text=Shoes", category: "Sportswear" },
  { id: 5, name: "Sunglasses", price: 45, image: "https://placehold.co/300x200?text=Sunglasses", category: "Accessories" },
  { id: 6, name: "Cotton T-Shirt", price: 25, image: "https://placehold.co/300x200?text=T-Shirt", category: "Fashion" },
];

// --- Components ---

const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <div className="logo">ShopSimple</div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#shop">Shop</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="cart-icon">
      🛒 <span className="cart-count">{cartCount}</span>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1>Spring Sale is Live</h1>
      <p>Get up to 50% off on new arrivals.</p>
      <button className="cta-button">Shop Now</button>
    </div>
  </section>
);

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <div className="product-info">
      <span className="category">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 ShopSimple. All rights reserved.</p>
  </footer>
);

// --- Main App Component ---

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} />
      <Hero />
      
      <main id="shop">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {productsData.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;