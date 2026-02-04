/* ===================================================================
   ARCHIVO: theme-toggle.js
   DESCRIPCIÓN: JavaScript para modo oscuro/claro
   INSTRUCCIONES: Coloca este archivo en /js/theme-toggle.js
   =================================================================== */

(function() {
  'use strict';
  
  // Función para obtener el tema guardado
  function getSavedTheme() {
    return localStorage.getItem('theme') || 'light';
  }
  
  // Función para guardar el tema
  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }
  
  // Función para aplicar el tema
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Actualizar meta theme-color para móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#ffffff');
    }
  }
  
  // Función para alternar el tema
  function toggleTheme() {
    const currentTheme = getSavedTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    applyTheme(newTheme);
    saveTheme(newTheme);
    
    // Añadir animación al botón
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.style.transform = 'rotate(360deg) scale(1.2)';
      setTimeout(() => {
        button.style.transform = '';
      }, 300);
    }
  }
  
  // Aplicar tema al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);
    
    // Crear botón de toggle si no existe
    createToggleButton();
    
    // Escuchar cambios en preferencia del sistema
    watchSystemThemeChanges();
  });
  
  // Crear el botón de toggle
  function createToggleButton() {
    // Verificar si ya existe
    if (document.getElementById('theme-toggle')) {
      attachToggleListener();
      return;
    }
    
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.setAttribute('aria-label', 'Cambiar tema');
    button.innerHTML = `
      <span id="moon-icon" class="theme-icon">🌙</span>
      <span id="sun-icon" class="theme-icon">☀️</span>
    `;
    
    document.body.appendChild(button);
    attachToggleListener();
  }
  
  // Adjuntar event listener al botón
  function attachToggleListener() {
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
    }
  }
  
  // Detectar cambios en preferencia del sistema
  function watchSystemThemeChanges() {
    if (!window.matchMedia) return;
    
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Solo aplicar si el usuario no ha establecido preferencia
    if (!localStorage.getItem('theme')) {
      applyTheme(darkModeQuery.matches ? 'dark' : 'light');
    }
    
    // Escuchar cambios futuros
    darkModeQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
  
  // Exponer funciones globalmente si es necesario
  window.themeToggle = {
    toggle: toggleTheme,
    setTheme: function(theme) {
      applyTheme(theme);
      saveTheme(theme);
    },
    getTheme: getSavedTheme
  };
  
})();
