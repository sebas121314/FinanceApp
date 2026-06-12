// Importa el componente interactivo que creamos para la zona de pruebas
import Playground from './Playground';

function App() {
  return (
    // Contenedor principal: Ocupa el 100% del alto de la pantalla (min-h-screen) 
    // y centra todo su contenido en forma de columna (flex flex-col items-center justify-center)
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      
      {/* Encabezado estático con un diseño de etiqueta o "badge" informativo */}
      <header className="mb-4 text-center">
        <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
          Entorno de Pruebas
        </span>
      </header>
      
      {/* Inyección y renderizado del componente Playground en el centro del diseño */}
      <Playground />
    </div>
  );
}

// Exporta el componente para que sea el punto de partida que main.jsx inyectará en el HTML
export default App;