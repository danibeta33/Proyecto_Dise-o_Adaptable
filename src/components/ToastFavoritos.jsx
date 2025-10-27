import React from "react";
import './ToastFavoritos.css';

export default function ToastFavoritos({
  visible,
  onClose,
  onFavoritos,
  message = "Se guardó con éxito",
  showFavoritos = true,
}) {
  if (!visible) return null;
  return (
    <div className="toast-fav-overlay">
      <div className="toast-fav-window">
        <span className="toast-fav-text">{message}</span>
        <div className="toast-fav-btn-row">
          <button className="toast-fav-btn" onClick={onClose}>Cerrar</button>
          {showFavoritos && (
            <button className="toast-fav-btn toast-fav-btn-rosado" onClick={onFavoritos}>Favoritos</button>
          )}
        </div>
      </div>
    </div>
  );
}
