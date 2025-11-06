import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewspapersPage from './pages/NewspapersPage';
import { mockNews, mockNewspapers, categories, newspaperCategories } from './data/mockData';
import './styles/App.css';
import './styles/responsive.css';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app">
      {/* Header con navegación y búsqueda */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Contenido principal */}
      <main>
        <div className="container">
          {currentPage === 'inicio' ? (
            <HomePage
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              news={mockNews}
              searchQuery={searchQuery}
            />
          ) : (
            <NewspapersPage
              newspapers={mockNewspapers}
              categories={newspaperCategories}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;