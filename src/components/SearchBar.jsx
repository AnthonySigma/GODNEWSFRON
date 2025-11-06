import React from 'react';
import { Search } from 'lucide-react';

function SearchBar({ searchQuery, setSearchQuery, placeholder = "Buscar..." }) {
  return (
    <div style={styles.searchContainer}>
      <Search style={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#fff',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb',
    maxWidth: '28rem',
    marginBottom: '1.5rem'
  },
  icon: {
    width: '1.25rem',
    height: '1.25rem',
    color: '#9ca3af'
  },
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '0.875rem',
    backgroundColor: 'transparent'
  }
};

export default SearchBar;