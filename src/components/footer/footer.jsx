import { useState } from 'react';
import ToastFavoritos from '../ToastFavoritos';
import './footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (emailValid) {
      setToastVisible(true);
      setEmail('');
      setOptIn(false);
    } else {
      // marca inválido usando la validación nativa si es posible
      e.currentTarget.reportValidity?.();
    }
  };

  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <div className="footer-top">
          <div className="footer-subscribe">
            <h3 className="footer-title">Suscríbete a nuestro sitio</h3>
            <form className="footer-form" onSubmit={handleSubmit}>
              <label htmlFor="footer-email" className="sr-only">Correo electrónico</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Correo electrónico *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="footer-optin">
                <input type="checkbox" checked={optIn} onChange={(e) => setOptIn(e.target.checked)} />
                <span>Sí, deseo suscribirme a su boletín.</span>
              </label>
              <button type="submit" className="footer-btn">Suscribirme</button>
            </form>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-item"><strong>Tel:</strong> 123-456-7890</div>
            <div className="footer-contact-item"><strong>Email:</strong> contacto@ubitcate.com</div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a aria-label="Facebook" href="#" className="footer-social-link" title="Facebook">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/>
              </svg>
            </a>
            <a aria-label="Twitter" href="#" className="footer-social-link" title="Twitter">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.57-1.37 1.89-2.37-.83.49-1.74.85-2.71 1.05A4.16 4.16 0 0 0 16.1 4c-2.3 0-4.16 1.88-4.16 4.2 0 .33.03.66.1.97-3.46-.18-6.53-1.86-8.58-4.42-.36.64-.56 1.37-.56 2.15 0 1.49.74 2.8 1.86 3.56-.69-.02-1.34-.22-1.9-.52v.05c0 2.08 1.47 3.82 3.42 4.21-.36.1-.74.15-1.14.15-.28 0-.55-.03-.82-.08.55 1.74 2.16 3.01 4.07 3.04A8.34 8.34 0 0 1 2 19.54 11.75 11.75 0 0 0 8.29 21c7.55 0 11.68-6.32 11.68-11.8 0-.18 0-.37-.01-.55A8.5 8.5 0 0 0 22.46 6z"/>
              </svg>
            </a>
            <a aria-label="Instagram" href="#" className="footer-social-link" title="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.246 2.43.41.61.22 1.05.48 1.51.94.46.46.72.9.94 1.51.16.46.35 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.41 2.43-.22.61-.48 1.05-.94 1.51-.46.46-.9.72-1.51.94-.46.16-1.26.35-2.43.41-1.27.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.43-.41a4.08 4.08 0 0 1-1.51-.94 4.08 4.08 0 0 1-.94-1.51c-.16-.46-.35-1.26-.41-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.056-1.17.246-1.97.41-2.43.22-.61.48-1.05.94-1.51.46-.46.9-.72 1.51-.94.46-.16 1.26-.35 2.43-.41C8.416 2.172 8.8 2.16 12 2.16Zm0 1.62c-3.16 0-3.532.012-4.78.068-1.03.048-1.59.22-1.96.37-.49.19-.84.42-1.21.79-.37.37-.6.72-.79 1.21-.15.37-.32.93-.37 1.96-.056 1.25-.068 1.62-.068 4.78s.012 3.532.068 4.78c.048 1.03.22 1.59.37 1.96.19.49.42.84.79 1.21.37.37.72.6 1.21.79.37.15.93.32 1.96.37 1.25.056 1.62.068 4.78.068s3.532-.012 4.78-.068c1.03-.048 1.59-.22 1.96-.37.49-.19.84-.42 1.21-.79.37-.37.6-.72.79-1.21.15-.37.32-.93.37-1.96.056-1.25.068-1.62.068-4.78s-.012-3.532-.068-4.78c-.048-1.03-.22-1.59-.37-1.96a3.03 3.03 0 0 0-.79-1.21 3.03 3.03 0 0 0-1.21-.79c-.37-.15-.93-.32-1.96-.37-1.25-.056-1.62-.068-4.78-.068Zm0 3.28a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 8.16a3.22 3.22 0 1 0 0-6.44 3.22 3.22 0 0 0 0 6.44Zm6.3-8.46a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Z"/>
              </svg>
            </a>
          </div>
          <div className="footer-copy">© 2025 UBitcate</div>
        </div>
      </div>

      <ToastFavoritos
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
        onFavoritos={() => setToastVisible(false)}
        message="Gracias por suscribirte"
        showFavoritos={false}
      />
    </footer>
  );
}