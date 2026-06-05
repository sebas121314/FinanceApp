import { useState } from 'react';

export default function Playground() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-8 max-w-md mx-auto my-10 bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
      {/* Probando Headings con Tailwind */}
      <h1 className="text-3xl font-bold text-blue-600 tracking-tight">
        Testing Heading 1
      </h1>
      <h2 className="text-xl font-medium text-gray-700">
        Testing Heading 2
      </h2>

      <p className="text-gray-500 text-sm">
        Si ves este recuadro centrado, con sombra y textos de colores, ¡Tailwind v4 está funcionando perfectamente!
      </p>

      {/* Probando interactividad para el Unit Test posterior */}
      <div className="pt-2">
        <button
          onClick={() => setClicked(true)}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors"
        >
          Click me
        </button>
      </div>

      {/* Texto condicional que aparecerá al hacer click */}
      {clicked && (
        <p className="text-md font-bold text-green-600 animate-bounce" data-testid="awesome-message">
          You are awesome
        </p>
      )}
    </div>
  );
}