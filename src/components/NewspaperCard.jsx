import React from 'react';
import '../styles/NewspaperCard.css';

function NewspaperCard({ newspaper }) {
  return (
    <div className="newspaper-card fade-in">
      {/* Imagen de portada */}
      <img
        src={newspaper.imageUrl}
        alt={`Portada de ${newspaper.name}`}
        className="newspaper-card-image"
        loading="lazy"
      />

      {/* Información del periódico */}
      <div className="newspaper-card-info">
        <h3 className="newspaper-card-name">{newspaper.name}</h3>
        <p className="newspaper-card-country">{newspaper.country}</p>
        <span className="newspaper-card-category">{newspaper.category}</span>
      </div>
    </div>
  );
}

export default NewspaperCard;