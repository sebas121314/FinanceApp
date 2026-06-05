import Playground from './Playground';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <header className="mb-4 text-center">
        <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
          Entorno de Pruebas
        </span>
      </header>
      
      {/* Renderizamos el componente que creamos en el paso anterior */}
      <Playground />
    </div>
  );
}

export default App;