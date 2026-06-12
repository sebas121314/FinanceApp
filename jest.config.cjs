/** @type {import('jest').Config} */ // Activa el autocompletado y las sugerencias inteligentes de Jest en tu editor de código

const config = {
  // Simula un navegador web (DOM) en la terminal para poder interactuar con elementos HTML (botones, inputs, etc.)
  testEnvironment: 'jsdom',

  // Expresión regular que ordena a Jest usar 'babel-jest' para traducir archivos .js y .jsx antes de correr los tests
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  // Lista de extensiones de archivo que Jest intentará resolver de forma automática cuando hagas un import
  moduleFileExtensions: ['js', 'jsx', 'json'],

  // Filtro de búsqueda: le dice a Jest que solo ejecute los archivos dentro de "src/" que terminen exactamente en ".test.jsx"
  testMatch: ['**/src/**/*.test.jsx'],
};

// Exporta el objeto de configuración utilizando la sintaxis tradicional de Node.js (CommonJS)
module.exports = config;