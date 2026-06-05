/* global describe, test, expect */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// ... el resto de tu código igual
import '@testing-library/jest-dom'; // Para usar cargadores como toBeInTheDocument
import Playground from './Playground';

describe('Pruebas en <Playground />', () => {
  
  // PRUEBA 1: Verificar los Headings (Títulos)
  test('debe mostrar los headings h1 y h2 con sus textos correspondientes', () => {
    render(<Playground />);
    
    // 1. Buscar los elementos en el documento
    const heading1 = screen.getByRole('heading', { level: 1 });
    const heading2 = screen.getByRole('heading', { level: 2 });
    
    // 2. Comprobar que existen
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    
    // 3. Verificar el texto que contienen
    expect(heading1).toHaveTextContent('Testing Heading 1');
    expect(heading2).toHaveTextContent('Testing Heading 2');
  });

  // PRUEBA 2: Verificar el Botón y su interactividad
  test('debe mostrar el botón "Click me" y revelar el mensaje al hacer click', async () => {
    render(<Playground />);
    
    // 1. Comprobar que el botón existe
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    
    // 2. Comprobar que el mensaje "You are awesome" NO está en pantalla al inicio
    const initialMessage = screen.queryByTestId('awesome-message');
    expect(initialMessage).not.toBeInTheDocument();
    
    // 3. Simular el click del usuario usando userEvent
    await userEvent.click(button);
    
    // 4. Verificar que ahora el mensaje SÍ existe en el documento y tiene el texto correcto
    const finalMessage = screen.getByTestId('awesome-message');
    expect(finalMessage).toBeInTheDocument();
    expect(finalMessage).toHaveTextContent('You are awesome');
  });

});