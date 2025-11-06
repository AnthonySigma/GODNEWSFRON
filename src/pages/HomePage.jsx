import React, { useMemo } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import NewsCard from '../components/NewsCard';

function HomePage({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  news, 
  searchQuery 
}) {
  // Filtrar noticias según categoría y búsqueda
  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesCategory = 
        selectedCategory === 'Todas' || item.category === selectedCategory;
      
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [news, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Filtro de categorías */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Grid de noticias */}
      {filteredNews.length > 0 ? (
        <div className="news-grid">
          {filteredNews.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>
            {searchQuery
              ? `No se encontraron noticias para "${searchQuery}"`
              : 'No hay noticias disponibles en esta categoría'}
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;