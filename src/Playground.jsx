// Importa el Hook fundamental de React para gestionar estados locales
import { useState } from 'react';

export default function Playground() {
  // Estado local: 'clicked' almacena el valor (booleano) y 'setClicked' permite actualizarlo
  const [clicked, setClicked] = useState(false);

  return (
    // Contenedor principal estilizado con Tailwind (bordes, sombras, centrado y espaciado interno)
    <div className="p-8 max-w-md mx-auto my-10 bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
      
      {/* Títulos con tipografía y colores atómicos de Tailwind */}
      <h1 className="text-3xl font-bold text-blue-600 tracking-tight">
        Testing Heading 1
      </h1>
      <h2 className="text-xl font-medium text-gray-700">
        Testing Heading 2
      </h2>

      <p className="text-gray-500 text-sm">
        Si ves este recuadro centrado, con sombra y textos de colores, ¡Tailwind v4 está funcionando perfectamente!
      </p>

      <div className="pt-2">
        {/* Botón interactivo: al hacer clic ejecuta una función flecha que cambia el estado a 'true' */}
        <button
          onClick={() => setClicked(true)}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors"
        >
          Click me
        </button>
      </div>

      {/* Renderizado condicional: El operador '&&' evalúa si 'clicked' es true. Si lo es, muestra el párrafo */}
      {clicked && (
        <p 
          className="text-md font-bold text-green-600 animate-bounce" 
          // Atributo clave para que React Testing Library localice este elemento exacto en los tests
          data-testid="awesome-message" 
        >
          You are awesome
        </p>
      )}
    </div>
  );
}

