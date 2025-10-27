import React from 'react';
import './ToastFavoritos.css';

export default function SelectModal({ visible, title = 'Selecciona una opción', options = [], onSelect, onClose }) {
  if (!visible) return null;
  return (
    <div className="toast-fav-overlay" role="dialog" aria-modal="true">
      <div className="toast-fav-window" style={{minWidth:'320px'}}>
        <span className="toast-fav-text" style={{marginBottom:'1rem'}}>{title}</span>
        <div className="select-modal-options">
          {options.map((opt, idx) => {
            const text = typeof opt === 'string' ? opt : (opt.label ?? (opt.value != null ? String(opt.value) : ''));
            return (
              <button
                key={idx}
                className="toast-fav-btn select-modal-btn"
                onClick={() => onSelect && onSelect(opt)}
                title={text}
              >
                {text}
              </button>
            );
          })}
        </div>
        <div className="toast-fav-btn-row" style={{marginTop:'1.25rem'}}>
          <button className="toast-fav-btn" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}
