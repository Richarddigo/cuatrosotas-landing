# Cuatro Sotas

Web del juego Cuatro Sotas: una variante del Guiñote con baraja española de 40 cartas. Idiomas: español, inglés, alemán y francés. Dominio declarado: https://cuatrosotas.cojauny.com.

## Desarrollo y revisión local

Validado con Node 24.22.3. Instala con `npm ci --ignore-scripts`, compila con `npm run build` y abre `npm run start -- --hostname localhost --port 3003`. URL: http://localhost:3003.

El hostname de arranque y la URL local deben coincidir. El ensayo con bind 127.0.0.1 produjo un bucle de reescritura del idioma; localhost pasa las pruebas del servidor de producción local.

## Verificación

- `npm run lint`
- `npm run type-check`
- `npm run test:unit`
- `npm run test:e2e` (Chrome instalado, un worker, perfiles temporales y servidor propio en 3003)
- `npm audit --omit=dev`

Se verifican las cartas por teclado y puntero, menú móvil y Escape, cambio de idioma incluido html.lang, rutas legales en cuatro idiomas, FAQ, geometría móvil, movimiento reducido y consentimiento con almacenamiento bloqueado o valores antiguos. Capturas en test-results/.

## Identidad y comportamiento

Mesa verde, baraja SVG original y señales coral/ocre. Las cartas de portada son una ilustración interactiva identificada como tal; no representan una partida ni capturas de la aplicación. Las tiendas siguen anunciadas como próximas y Premium conserva su flag en src/lib/publicationFlags.ts.

La analítica opcional se monta al aceptar. Su filtro dinámico bloquea futuros eventos al retirar la aceptación, incluso si una escritura fallida conserva un valor antiguo. Las preferencias del pie permiten cambiar la decisión. Un valor ausente o inválido legible se interpreta como decisión desconocida; una excepción real de almacenamiento permite la elección explícita de esta pestaña. Esto describe esta web y conserva las políticas de la aplicación móvil.

## Dependencias y límites

Next.js y eslint-config-next: 16.4.6, publicación oficial https://github.com/vercel/next.js/releases/tag/v16.4.6. Auditoría de producción: cero avisos. Auditoría completa: siete avisos moderados en TypeScript-ESLint/minimatch, https://github.com/advisories/GHSA-g3hv-75wg-m249. Sin overrides ni excepciones al análisis.

Informe local: docs/redesign-verification-20261116.json. Las pruebas locales no acreditan despliegue, configuración de Vercel ni publicación en tiendas.
