/* global describe, test, expect */

// Utilidades para renderizar componentes y consultar el DOM virtual
import { render, screen } from '@testing-library/react';
// Simulador de interacciones de usuario (clics, teclado, etc.)
import userEvent from '@testing-library/user-event';
// Extensión de Jest para usar aserciones nativas del navegador (ej. .toBeInTheDocument)
import '@testing-library/jest-dom'; 
// Componente bajo prueba
import Playground from './Playground';

// Bloque principal que agrupa todas las pruebas de este componente
describe('Pruebas en <Playground />', () => {
  
  // CASO DE PRUEBA 1: Verifica la correcta renderización de la estructura HTML inicial
  test('debe mostrar los headings h1 y h2 con sus textos correspondientes', () => {
    render(<Playground />); // 1. Monta el componente en el DOM de prueba
    
    // 2. Busca los encabezados utilizando roles de accesibilidad
    const heading1 = screen.getByRole('heading', { level: 1 });
    const heading2 = screen.getByRole('heading', { level: 2 });
    
    // 3. Valida que los elementos existan físicamente en el documento
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    
    // 4. Valida que el contenido de texto sea el esperado
    expect(heading1).toHaveTextContent('Testing Heading 1');
    expect(heading2).toHaveTextContent('Testing Heading 2');
  });

  // CASO DE PRUEBA 2: Verifica el flujo de estado dinámico ante una acción del usuario
  test('debe mostrar el botón "Click me" y revelar el mensaje al hacer click', async () => {
    render(<Playground />); // 1. Monta el componente
    
    // 2. Localiza el botón por su texto (ignora mayúsculas/minúsculas gracias a /i)
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    
    // 3. Verifica que el mensaje oculto NO esté en pantalla. 
    // Se usa 'queryBy' porque devuelve null si no lo encuentra; 'getBy' lanzaría un error.
    const initialMessage = screen.queryByTestId('awesome-message');
    expect(initialMessage).not.toBeInTheDocument();
    
    // 4. Dispara de forma asíncrona (await) el evento clic simulando al usuario
    await userEvent.click(button);
    
    // 5. Localiza el mensaje mediante su identificador único (data-testid)
    const finalMessage = screen.getByTestId('awesome-message');
    
    // 6. Confirma que el mensaje apareció y muestra el texto final correcto
    expect(finalMessage).toBeInTheDocument();
    expect(finalMessage).toHaveTextContent('You are awesome');
  });

});

