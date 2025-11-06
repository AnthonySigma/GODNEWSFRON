import React, { useMemo, useState } from 'react';
import { Calendar } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import NewspaperCard from '../components/NewspaperCard';

function NewspapersPage({ newspapers, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Fecha actual formateada
  const today = new Date().toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Filtrar periódicos
  const filteredNewspapers = useMemo(() => {
    return newspapers.filter((newspaper) => {
      const matchesCategory = 
        selectedCategory === 'Todos' || newspaper.category === selectedCategory;
      
      const matchesSearch = 
        newspaper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        newspaper.country.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [newspapers, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Encabezado */}
      <div style={styles.header}>
        <h2 style={styles.title}>Portadas de Periódicos</h2>
        <p style={styles.description}>
          Explora las portadas de los principales periódicos del mundo actualizadas diariamente
        </p>
        <div style={styles.dateContainer}>
          <Calendar style={styles.calendarIcon} />
          <span style={styles.dateText}>Última actualización: {today}</span>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Buscar por nombre o país..."
      />

      {/* Filtros de categoría */}
      <div style={styles.filterContainer}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
            style={styles.filterButton}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de periódicos */}
      {filteredNewspapers.length > 0 ? (
        <div className="newspapers-grid">
          {filteredNewspapers.map((newspaper) => (
            <NewspaperCard key={newspaper.id} newspaper={newspaper} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No se encontraron periódicos que coincidan con tu búsqueda</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#111827'
  },
  description: {
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: '1.6'
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  calendarIcon: {
    width: '1rem',
    height: '1rem',
    marginRight: '0.5rem'
  },
  dateText: {
    fontSize: '0.875rem'
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '2rem'
  },
  filterButton: {
    border: '1px solid #e5e7eb'
  }
};

export default NewspapersPage;