# 💰 FinanceApp

Una aplicación moderna de gestión financiera personal diseñada para el control óptimo de ingresos, gastos y presupuestos. Este proyecto sirve como base sólida de desarrollo utilizando las mejores prácticas de la industria en el ecosistema de React.

---

## 🛠️ Stack Tecnológico

El proyecto está construido sobre un entorno de desarrollo de alto rendimiento y herramientas de última generación:

* **Frontend:** React 18 (Arquitectura basada en componentes funcionales y Hooks).
* **Empaquetador:** Vite (Compilación ultra rápida y Hot Module Replacement).
* **Estilos:** Tailwind CSS v4 (Diseño responsivo y utilitario de alto rendimiento).
* **Gestión de Estado:** Zustand (Almacenamiento global ligero y optimizado).
* **Testing:** Jest & React Testing Library (Entorno de pruebas unitarias automatizadas con entorno de navegador `jsdom`).

---

## 🧠 Arquitectura y Gestión de Estado (State Management)

Durante la fase de diseño técnico, se evaluó rigurosamente la estrategia para la sincronización y flujo de datos de la aplicación. A continuación se detallan los fundamentos de la arquitectura adoptada:

### 1. ¿A qué se refiere "State Management"?
El manejo de estado consiste en centralizar la "memoria" o los datos dinámicos de la aplicación en un contenedor único llamado **Store**. 
> **Beneficio principal:** Evita el problema del *Prop Drilling* (pasar datos innecesariamente a través de múltiples niveles de componentes intermedios). Con un Store centralizado, cualquier componente de la app puede leer o modificar los datos directamente de forma síncrona, limpia y ordenada sin afectar la estructura de los demás.

### 2. Evaluación de Librerías Encontradas
Se analizaron las tres herramientas más utilizadas en el ecosistema actual de React bajo 4 criterios clave: **enfoque, tamaño, complejidad y debugging**.

| Herramienta | Enfoque Principal | Complejidad / Boilerplate | Observaciones |
| :--- | :--- | :--- | :--- |
| **Redux Toolkit** | Estado Global del Cliente | Alta (Requiere configuraciones extensas) | Representaba sobreingeniería para el alcance actual del proyecto. |
| **TanStack Query** | Estado del Servidor / Caché API | Media (Enfocado en operaciones asíncronas) | Ideal para sincronización con bases de datos remotas, no requerido en la fase actual. |
| **Zustand** | Estado Global del Cliente | Baja (Instalación y uso inmediato) | **Seleccionada.** Ofrece la potencia de Redux de manera minimalista. |

### 3. Justificación de la Elección de Zustand
Nos decidimos por **Zustand** como la solución definitiva para `FinanceApp` debido a los siguientes pilares:
* **Simplicidad:** Utiliza *hooks* nativos de React, reduciendo la curva de aprendizaje a cero. Crear un estado global requiere pocas líneas de código e implementarlo toma minutos.
* **Rendimiento y Peso:** Es extremadamente ligera (~1.5 KB), eliminando sobrecarga en el navegador.
* **Escalabilidad:** Mantiene el proyecto limpio y ágil en su etapa actual (pequeña/mediana), pero cuenta con la arquitectura necesaria para soportar un crecimiento financiero complejo en el futuro.

### 4. Estrategia de Debugging en el Navegador
Zustand cuenta con soporte nativo para **Redux DevTools**, la extensión de inspección de estados más potente del mercado.

* **Implementación:** Se activa en el código importando el *middleware* `devtools` desde la librería y envolviendo los estados globales.
* **Uso en Producción/Desarrollo:** Instalando la extensión de Redux DevTools en Chrome/Firefox se abre una pestaña dedicada en las Herramientas de Desarrollador (`F12`).
* **Capacidades en tiempo real:** Permite auditar qué acciones se ejecutan, ver los cambios exactos de los datos en cada evento y realizar **"Time-Travel Debugging"** (navegar hacia atrás y adelante en la línea del tiempo del estado para evaluar el comportamiento exacto de la interfaz de usuario).

---

## 🧪 Entorno de Pruebas Unitarias (Jest)

El repositorio cuenta con una infraestructura de pruebas automatizadas configurada para mitigar regresiones de código. Se incluye un componente de pruebas llamado `Playground.jsx` que valida:
1.  La existencia y textos correctos de elementos semánticos de encabezado (`<h1>` y `<h2>`) estilizados con Tailwind v4.
2.  La simulación interactiva de eventos de usuario (hacer clic en un botón y validar la renderización condicionada de mensajes en el DOM).

---

## 🚀 Instrucciones de Ejecución

Sigue estos pasos para clonar, instalar y ejecutar el proyecto localmente en tu máquina:

### 1. Instalación de Dependencias
Asegúrate de estar en la raíz del proyecto e instala los módulos necesarios:
```bash
npm install