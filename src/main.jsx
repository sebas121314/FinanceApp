// Importa una herramienta de desarrollo que ayuda a detectar problemas potenciales y malas prácticas en el código
import { StrictMode } from 'react'
// Importa el método oficial de React para inicializar y controlar el árbol de componentes en el navegador
import { createRoot } from 'react-dom/client'
// Carga la hoja de estilos global (donde están inyectadas las utilidades de Tailwind CSS)
import './index.css'
// Importa el componente raíz de la aplicación (el contenedor 'madre' de la interfaz)
import App from './App.jsx'

// 1. Localiza en el archivo index.html el contenedor físico con el ID "root".
// 2. Inicializa el motor de React en ese nodo específico utilizando 'createRoot'.
// 3. Ejecuta el método '.render()' para "dibujar" el componente <App /> en la pantalla del usuario.
createRoot(document.getElementById('root')).render(
  // Envoltura de depuración: duplica temporalmente ciertos ciclos en desarrollo para alertar sobre errores
  <StrictMode>
    <App />
  </StrictMode>,
)