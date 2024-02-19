# Buscador de personajes de Harry Potter ⚡

Este proyecto forma parte de la evaluación final del Módulo 3 del Bootcamp de Programación Web de Adalab. La web está diseñada para buscar, filtrar y mostrar personajes famosos de Harry Potter utilizando tecnologías como React, JavaScript, HTML, y CSS.

### **Funcionalidades destacadas**

- Búsqueda de personajes: La aplicación permite buscar personajes de Harry Potter utilizando un formulario intuitivo.
- Detalle de personaje: Permite ver detalles completos de cada personaje.
- Filtrado por casa y género: Los usuarios pueden filtrar los personajes por casa y género.

### **Tecnologías utilizadas**

- React: para el desarrollo del frontend y la interacción dinámica con el usuario.
- JavaScript: para manejar la lógica principal del buscador y los componentes interactivos.
- HTML & CSS: para la estructura y el diseño de la interfaz de usuario.
- Sass: para la mejora de estilos con el preprocesador Sass.
- React Router: para la navegación entre diferentes vistas de la aplicación.

## Link Github Pages 🌐

Para ver el proyecto, visita el siguiente enlace: [Buscador de Personajes de Harry Potter](https://beta.adalab.es/modulo-3-evaluacion-final-maialenmunoa/)

## Uso de Fetch para obtener datos de la API

El proyecto utiliza una API de Harry Potter para obtener información sobre los personajes. Implementa la funcionalidad de búsqueda, aprovechando el método `fetch` de JavaScript para realizar peticiones a la API.

```javascript
fetch(`https://api.harrypotterapi.com/v1/characters`)
  .then(response => response.json())
  .then(data => {
    // Procesar los datos obtenidos de la API
  });
```

## Uso de React Router para la navegación

Se utiliza React Router para la navegación entre diferentes vistas de la aplicación. Las rutas están configuradas en el componente App.jsx para manejar la navegación entre la página de inicio, la lista de personajes y el detalle de cada personaje.

## Guía de inicio rápido 🔍

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

> **NOTA:** Asegúrate de tener instalado [Node JS](https://nodejs.org/)

### Pasos para ejecutar el ejercicio ▶️

Ejecuta estos comandos en la terminal

1. **Clona el repositorio**:

```bash
 git clone https://github.com/Adalab/modulo-3-evaluacion-final-maialenmunoa.git
```

2. Instala las **dependencias locales**:

```bash
npm install
```

3. **Arranca el proyecto**:

```bash
npm run dev
```

Este comando:
**Abre automáticamente una ventana en el navegador y muestra la página web**

## Autoría 👩‍💻

[Maialen Muñoa](https://github.com/maialenmunoa)
