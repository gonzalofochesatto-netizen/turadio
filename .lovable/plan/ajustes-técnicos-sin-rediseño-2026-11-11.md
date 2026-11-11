# Ajustes técnicos sin rediseño

## HTML inicial: opciones reales
- **Recomendada: prerenderizado estático al compilar.** Mantener React y Vite, renderizar la home desde sus mismos componentes e insertar el resultado en el HTML publicado. No cambia el dominio ni el hosting y evita duplicar manualmente textos y precios.
- **Límites:** el contenido se actualiza con cada publicación; el audio, el menú y los acordeones siguen necesitando JavaScript. La vista de desarrollo no es el HTML compilado. Hay que incluir las respuestas de FAQ ocultas y evitar que las animaciones oculten el contenido estático antes de iniciar JavaScript. Verificar el HTML generado; la URL pública solo cambia al desplegar.
- **Alternativa: renderizado en servidor con TanStack Start.** Implica migración y otro proceso de publicación; no se aplicará en este trabajo. [Qué ofrece la actualización](https://lovable.dev/blog/building-apps-using-tanstack-start).

## Cambios propuestos
1. Agregar prerenderizado de la home durante la compilación, con H1, secciones, planes, respuestas FAQ y JSON-LD. React reutilizará ese HTML y conservará las interacciones actuales.
2. Crear una copia de la imagen principal existente de 1200 × 630 para compartir; agregar únicamente `og:image`, `twitter:image` y `og:image:alt`, apuntando a `https://www.turadioeninternet.com.ar/`.
3. En celulares, compactar el reproductor y ubicar WhatsApp a su lado, reservando una franja inferior para que el contenido no quede detrás. Revisar la primera pantalla y las estadísticas también en escritorio, sin cambiar textos ni ocultar estadísticas existentes.
4. Conservar el sitemap con la home, sin `lastmod`: no hay una fecha verificable de cambio significativo del contenido. Conservar todos los demás metadatos, enlaces y configuraciones.

## Detalles técnicos
- Usar un paso de compilación integrado con Vite para renderizar los componentes actuales en un contexto estático; no introducir un servidor persistente ni migrar de framework.
- Mantener los proveedores y rutas existentes, hidratar el HTML generado e incluir respuestas de acordeón cerradas en el DOM sin mostrarlas.
- Validar el HTML generado y las interacciones en 390 px y escritorio, incluyendo ambos botones de reproducción y los enlaces de WhatsApp.

## Verificación y entrega
- Comprobar H1, los tres precios, respuestas de FAQ y JSON-LD en el HTML compilado sin ejecutar JavaScript.
- Tras publicar, abrir «Ver código fuente» de la home y buscar `<h1` y `application/ld+json`.
- Informar qué se verificó localmente y qué requiere el próximo despliegue. No modificar diseño, contenido comercial, precios, números, dominio, hosting, enlaces legales ni seguimiento.