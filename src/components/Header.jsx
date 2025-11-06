import React, { useState } from 'react';
import { Search, Menu, X, User, Calendar as CalendarIcon } from 'lucide-react';
import '../styles/Header.css';

function Header({ currentPage, setCurrentPage, searchQuery, setSearchQuery }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="header-left">
              <div className="header-logo" onClick={() => handleNavigation('inicio')}>
                <h1>GODNEWS</h1>
              </div>
              <div className="header-date">
                <CalendarIcon />
                <span>{today}</span>
              </div>
            </div>

            <nav className="header-nav">
              <button
                onClick={() => handleNavigation('inicio')}
                className={currentPage === 'inicio' ? 'active' : ''}
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavigation('portadas')}
                className={currentPage === 'portadas' ? 'active' : ''}
              >
                Portadas
              </button>
            </nav>

            <div className="header-right">
              <div className="header-search">
                <Search />
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="login-btn" onClick={() => setShowLoginModal(true)}>
                <User />
                <span>Iniciar Sesión</span>
              </button>
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mobile-menu">
              <nav>
                <button
                  onClick={() => handleNavigation('inicio')}
                  className={currentPage === 'inicio' ? 'active' : ''}
                >
                  Inicio
                </button>
                <button
                  onClick={() => handleNavigation('portadas')}
                  className={currentPage === 'portadas' ? 'active' : ''}
                >
                  Portadas
                </button>
                <button onClick={() => setShowLoginModal(true)} className="mobile-login-btn">
                  <User />
                  Iniciar Sesión
                </button>
              </nav>
              <div className="header-search">
                <Search />
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  );
}

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login/Registro:', { email, password, nombre, isRegistering });
    alert(isRegistering ? '¡Registro exitoso!' : '¡Inicio de sesión exitoso!');
    onClose();
  };

  const handleSocialLogin = (provider) => {
    console.log(`Iniciar sesión con ${provider}`);
    alert(`Iniciando sesión con ${provider}`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-login" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>

        <div className="login-header">
          <h2>GODNEWS</h2>
          <p>{isRegistering ? '¡Bienvenido de nuevo!' : '¡Bienvenido de nuevo!'}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {isRegistering && (
            <div className="form-group">
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                required
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
              minLength="6"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>

          {!isRegistering && (
            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>¿Has olvidado tu contraseña?</span>
              </label>
            </div>
          )}

          <button type="submit" className="submit-btn-login">
            {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="divider">
          <span>Iniciar Sesión con</span>
        </div>

        <div className="social-login">
          <button
            type="button"
            className="social-btn google"
            onClick={() => handleSocialLogin('Google')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>

          <button
            type="button"
            className="social-btn facebook"
            onClick={() => handleSocialLogin('Facebook')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>

          <button
            type="button"
            className="social-btn apple"
            onClick={() => handleSocialLogin('Apple')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
          </button>
        </div>

        <div className="terms-text">
          Al continuar, usted acepta los{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>Términos de Servicio</a> y la{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>Política de Privacidad</a> de GODNEWS
        </div>

        <p className="toggle-auth-bottom">
          {isRegistering ? '¿No tienes una cuenta?' : '¿No tienes una cuenta?'}{' '}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Iniciar sesión' : 'Registrarse'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Header;