# BioSoft — Frontend en React

Frontend del CMMS/ERP de gestión de equipo médico BioSoft, migrado a React + Vite.
Incluye: Login/Registro con planes, Dashboard, Equipos (con QR y escáner), Órdenes de
Trabajo, Kanban, Analítica, Historial General y Calendario. Todos los datos son de
ejemplo y viven en memoria (se reinician al recargar la página); aún no hay backend.

## Requisitos
- Node.js 18 o superior
- npm

## Instalación y ejecución local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Generar la versión de producción

```bash
npm run build
npm run preview
```

Los archivos listos para publicar quedan en la carpeta `dist/`. Puedes subir esa
carpeta a Netlify, Vercel, GitHub Pages o cualquier hosting estático.

## Estructura del proyecto

```
src/
  main.jsx                 punto de entrada
  App.jsx                  enrutador de vistas + modales
  index.css                estilos y variables de diseño (tema BioSoft)
  data/mockData.js         constantes, datos de ejemplo y funciones auxiliares
  context/AppContext.jsx   estado global (usuario, equipos, órdenes, modales)
  components/
    Login.jsx              landing + login + registro + planes
    Sidebar.jsx, Topbar.jsx
    Dashboard.jsx           tarjetas resumen + gráficas (recharts)
    Equipos.jsx             listado, filtros, buscador
    Ordenes.jsx             listado de órdenes de trabajo
    Kanban.jsx              tablero arrastrable
    Analitica.jsx           gráficas de categoría / tipo / mes
    Historial.jsx           línea de tiempo general
    Calendario.jsx          calendario mensual de eventos
    modals/                 formularios y detalles (equipo, orden, QR, escáner)
```

## Notas técnicas
- El código QR se genera con la librería `qrcode` (imagen descargable en PNG).
- El escaneo usa `html5-qrcode`: intenta cámara en vivo, permite subir una foto del
  código, y siempre ofrece una búsqueda manual como respaldo.
- Los PDF (hoja de vida del equipo y orden de trabajo) se generan con `jspdf`.
- Los datos (equipos, órdenes) están en memoria vía React Context — para producción
  real se necesita conectar esto a un backend (API + base de datos).

## Próximos pasos sugeridos
- Conectar a una API real (Node/Express, Django, etc.) y una base de datos.
- Autenticación real (JWT / OAuth) en vez del login de demostración.
- Persistencia de archivos (manuales PDF, fotos) en almacenamiento en la nube.
- Envío real de correos para alertas de calibración/mantenimiento y notificación
  de órdenes de trabajo.
