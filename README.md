
---

# Tasas de Cambio de Divisas 💰📉

## Descripción 🌟
La aplicación **"Tasas de Cambio de Divisas"** es una plataforma interactiva que permite a los usuarios consultar las tasas de cambio actuales de diferentes monedas frente al dólar estadounidense. La aplicación ofrece una búsqueda rápida por código de moneda, mostrando la tasa de cambio correspondiente en una tabla organizada y visualmente atractiva.

Desarrollada en **HTML**, **CSS** y **JavaScript puro**, esta aplicación es ligera y fácil de usar, sin necesidad de dependencias externas.

## Funcionalidades 🚀

- **Visualización en tiempo real**: Muestra una tabla con las tasas de cambio actualizadas de diversas monedas.
- **Búsqueda rápida**: Permite buscar monedas mediante su código (ej. USD, EUR, JPY).
- **Interfaz responsiva**: Se adapta a diferentes tamaños de pantalla (desktop, tablet, móvil).
- **Interactividad avanzada**: La tabla es interactiva, permitiendo filtrar y ordenar las tasas de cambio según las preferencias del usuario.

## Tecnologías Utilizadas 🛠️

- **HTML**: Estructura básica de la página web.
- **CSS**: Estilos que mejoran la apariencia visual y garantizan un diseño responsivo.
- **JavaScript**: Lógica para la búsqueda y manipulación dinámica de la tabla.
- **API (futura integración)**: Actualmente, las tasas se simulan estáticamente. En versiones futuras, se podrá integrar con APIs públicas como [Exchangerate API](https://www.exchangerate-api.com/) o [Fixer API](https://fixer.io/) para obtener tasas en tiempo real.

## Estructura del Proyecto 📁

```plaintext
/tasas-cambio
├── index.html        # Página principal
├── style.css         # Estilos de la aplicación
├── script.js         # Lógica de JavaScript
├── /images           # Carpeta con imágenes usadas en el proyecto (si es necesario)
├── /assets           # Archivos de recursos adicionales (fuentes, iconos, etc.)
└── README.md         # Este archivo README
```

## Instrucciones de Instalación ⚙️

1. **Clonar el repositorio**:
   Puedes clonar el repositorio usando `git`:

   ```bash
   git clone https://github.com/TuUsuario/tasas-cambio.git
   ```

2. **Abrir la aplicación en tu navegador**:
   - Dirígete a la carpeta donde clonaste el repositorio.
   - Abre el archivo `index.html` en tu navegador favorito.

### Notas Adicionales 📌

- La aplicación no depende de ninguna librería externa como jQuery o frameworks como React; todo el código está escrito en HTML, CSS y JavaScript puro.

## Cómo Funciona 🧩

### Interfaz de Usuario 🖥️

- El título y la imagen se encuentran en un contenedor adaptado a diferentes tamaños de pantalla.
- Un campo de búsqueda permite filtrar las monedas por su código.
- Una tabla dinámica presenta las tasas de cambio, actualizándose en tiempo real según la búsqueda.

### Lógica de JavaScript 💻

- La lógica está implementada en JavaScript puro. Al escribir un código de moneda, la tabla se filtra automáticamente.
- Se utiliza el evento `keyup` para capturar las entradas del usuario y actualizar la tabla.

## Integración con API (Opcional) 🌐

Aunque actualmente no se utiliza una API externa para obtener tasas en tiempo real, puedes integrar una API siguiendo estos pasos:

1. Regístrate en [Exchangerate API](https://www.exchangerate-api.com/) o [Fixer.io](https://fixer.io/) para obtener tu clave API.
2. Realiza una solicitud desde `script.js` para obtener las tasas actualizadas.

Ejemplo básico para hacer la solicitud:

```javascript
fetch('https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Muestra las tasas de cambio
  })
  .catch(error => console.error('Error fetching data:', error));
```

Recuerda reemplazar `YOUR_API_KEY` por tu clave obtenida.

## Mejoras y Funcionalidades Futuras 🔮

- **Integración con API**: Obtener tasas en tiempo real.
- **Soporte ampliado para más monedas**: Ampliar la lista disponible.
- **Gráficos interactivos**: Visualizar la evolución histórica de las tasas.
- **Historial de tasas**: Permitir ver el historial para diferentes monedas.

## Contribuciones 🤝

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/mi-feature`).
3. Realiza tus cambios y asegúrate que todo funcione correctamente.
4. Haz un commit (`git commit -am 'Añadir nueva funcionalidad'`).
5. Envía un pull request.

## Licencia 📜

Este proyecto está bajo la Licencia MIT - consulta el archivo `LICENSE` para más detalles.

## Contacto 📬

¡No olvides suscribirte, darle like y compartir este video! 🌟 Tu apoyo es fundamental para seguir creando contenido de calidad. También me encantaría leer tus comentarios, ¡así que déjalos abajo! 💬💚

Conéctate conmigo en mis redes sociales para más contenido y actualizaciones:
1. 🎬 [Youtube](https://www.youtube.com/channel/UCSob-3E5z4IHtMF5B4bN-FA)
2. 👨‍💼 [LinkedIn](https://www.linkedin.com/in/juancitope%C3%B1a/)
3. 📷 [Instagram](https://www.instagram.com/juancito.pena.v/)
4. 📑 [Facebook](https://www.facebook.com/juancito.p.v)
5. 🐦 [Twitter](https://twitter.com/JuancitoPenaV)
6. 📧 Email: juancito.pena@gmail.com

---

Espero que esta versión sea más atractiva y cumpla con tus expectativas. Si necesitas más ajustes, ¡hazmelo saber!

Citations:
[1] https://fastercapital.com/es/tema/usar-emoji-para-mejorar-tus-subt%C3%ADtulos-y-comentarios.html
[2] https://filmora.wondershare.es/youtube/how-to-add-emojis-youtube-comments.html
[3] https://www.aluracursos.com/blog/como-escribir-un-readme-increible-en-tu-github
[4] https://es.linkedin.com/learning/html-esencial-22849768/anadir-emojis-en-html
[5] https://docs.github.com/es/enterprise-cloud@latest/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
[6] https://www.veed.io/es-ES/herramientas/agregar-emoticonos-a-videos
[7] https://diegol.top/ecommerce/emojis-iconos-fichas-de-producto/
