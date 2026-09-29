# BioExplorador: Célula Vegetal Interactiva

Proyecto educativo desarrollado como una experiencia interactiva para explorar los principales componentes de la célula vegetal. La aplicación combina diseño visual atractivo, navegación guiada y contenido biológico breve para facilitar el aprendizaje en un entorno web simple y accesible.

## Descripción

Este proyecto presenta una célula vegetal con hotspots interactivos que permiten consultar información sobre organelos como:

- Cloroplastos
- Núcleo
- Mitocondrias
- Retículo endoplasmático rugoso y liso
- Aparato de Golgi
- Vacuola central
- Pared celular
- Membrana celular
- Ribosomas y otros componentes relevantes

Al hacer clic en cada estructura, se muestran detalles, subcomponentes y datos curiosos para apoyar la comprensión de la biología celular.

## Funcionalidades

- Pantalla de inicio con presentación del proyecto
- Navegación entre la vista inicial y el explorador de la célula
- Hotspots interactivos sobre la imagen de la célula
- Panel lateral con información detallada por organelo
- Sección de subcomponentes
- Datos curiosos o “sabías que...”
- Línea conectora animada entre el hotspot y el panel de información
- Diseño responsivo con estilo visual moderno en tonos verdes y cian

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- Archivos de datos en JavaScript para estructurar la información de cada organelo

## Estructura del proyecto

```text
6to_biologia_celula_vegetal-main/
├── index.html
├── script.js
├── organelleData.js
├── style.css
├── celula_vegetal_limpia.png
├── celula_vegetal_realista.png
├── celula_vegetal_final.png
├── celula_vegetal_completa.png
├── fondo_selva.png
└── README.md
```

## Cómo ejecutar el proyecto

### Opción 1: abrir directamente

Puedes abrir el archivo `index.html` en un navegador moderno.

### Opción 2: servidor local recomendado

Desde la carpeta del proyecto, ejecuta:

```bash
python -m http.server 8000
```

Luego abre en tu navegador:

```text
http://localhost:8000/
```

## Verificación

Se validó la carga del proyecto en un servidor local y la página principal respondió correctamente con el título:

```text
BioExplorador: Célula Vegetal Interactiva
```

## Créditos

Proyecto educativo para la materia de Biología, con enfoque visual y didáctico para la comprensión de la célula vegetal.

Integrantes mencionados en la interfaz:

- Zahare Cussa
- Melanie Villanueva
- Sofia Arteta

## Observación

Este es un proyecto de front-end estático, pensado para fines educativos y de presentación de contenido biológico de forma interactiva.
