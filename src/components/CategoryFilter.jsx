import React from 'react';

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>CATEGORÍAS</h2>
      <div className="category-filters" style={styles.filterContainer}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#111827'
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  }
};

export default CategoryFilter;