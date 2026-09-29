# Reglas de trabajo para este proyecto

## Alcance
- Trabajar ÚNICAMENTE dentro de la carpeta `portfolio/`
- Nunca leer, modificar, crear ni eliminar archivos fuera de esta carpeta
- Si una tarea requiere tocar algo fuera de `portfolio/`, DETENERSE y preguntar antes de proceder

## Autonomía
- Tomar decisiones de implementación sin preguntar cuando estén cubiertas por el SPEC.md
- Al finalizar una tarea completa, notificar con un resumen de qué se hizo
- Si hay errores de compilación, intentar resolverlos solo antes de escalar

## Prohibiciones explícitas
- No modificar archivos del sistema (~/, /etc, /usr, etc.)
- No tocar otros proyectos en directorios adyacentes a portfolio/
- No instalar paquetes globales (solo dependencias locales en package.json)
- No ejecutar comandos destructivos (rm -rf, git reset --hard) sin confirmación explícita
- No hacer push a ningún remote sin pedirlo explícitamente

## Ramas
- Solo existen `main` y `develop`, en local y en el remoto. No crear ramas `feature/*`, `release/*` ni otras.
- Todo el trabajo se hace y se commitea en `develop`. Llega a `main` mediante pull request de `develop` → `main`.
- `main` es lo que Vercel publica: nunca commitear directamente en `main`.
- Después de fusionar un PR, actualizar `develop` con `main` (fast-forward) antes de seguir trabajando.

## Hoja de vida (LaTeX)

### Ubicación y compilación
- Archivos en `curriculum_vitae/`:
  - `cv-es.tex`: versión en español, fuente de verdad.
  - `cv-en.tex`: traducción al inglés.
  - `cv-preamble.tex`: diseño y comandos compartidos por ambas versiones.
  - `cv-es.xmpdata` / `cv-en.xmpdata`: metadatos del PDF.
  - `altacv.cls`: clase AltaCV v1.6.5. No editar la clase: toda personalización va en `cv-preamble.tex`.
- Motor: pdfLaTeX vía latexmk (MiKTeX + Strawberry Perl en Windows). Desde `curriculum_vitae/`, compilar ambas versiones:
  `latexmk -pdf -interaction=nonstopmode -halt-on-error -file-line-error -outdir=build cv-es.tex cv-en.tex`
- La salida va a `curriculum_vitae/build/` (ignorada por git).
- Si MiKTeX falla con `Font Lato-Regular-T1-TLF--base at 720 not found`: correr `initexmf --update-fndb` e `initexmf --mkmaps`, y recompilar forzando con `latexmk -g ...`.
- Después de cada cambio: compilar sin errores, revisar warnings nuevos (overfull hbox, pdfx, fuentes), confirmar que son máximo 2 páginas y revisar el PDF visualmente.

### Estructura y orden de lectura
- Ambas páginas en dos columnas (`paracol`, izquierda 55 %), un entorno `paracol` por página. El lector recorre página 1 izquierda → página 1 derecha → página 2 izquierda → página 2 derecha.
- Página 1: toda la experiencia laboral, en orden cronológico inverso. Empieza en la columna izquierda después del perfil y continúa arriba de la columna derecha (`\switchcolumn`), cortando siempre entre dos cargos. Después de la experiencia, en la columna derecha, van Estudios y Habilidades solo si caben completos; si no, pasan a la página 2.
- Página 2: a la izquierda Estudios (si no cupo en la 1), Experiencia académica y Premios; a la derecha Habilidades (si no cupo en la 1), Cursos, Idiomas, Áreas de interés y Referencias.
- Ninguna entrada (cargo, estudio, curso) puede quedar partida entre columnas o páginas, y ningún título de sección puede quedar solo al final de una columna.
- Al cambiar contenido, recalcular el punto de corte de la experiencia para minimizar huecos, confirmar que la página 1 no se desborda y revisar el PDF visualmente.
- Evitar palabras largas unidas por barra (p. ej. `Python/KNIME`): generan espaciado vertical extra; escribir `Python y KNIME`.

### Estilo
- Fechas en español con formato `Mmm. AAAA` (Ene., Feb., Mar., Abr., May., Jun., Jul., Ago., Sep., Oct., Nov., Dic.); rangos con `--`; el cargo actual termina en `presente`.
- Duraciones solo en cargos cerrados; nunca en el cargo actual.
- Viñetas: máximo 4 por cargo, en primera persona y en pasado, orientadas al logro ("Diseñé…", "Lideré…", "Ayudé en la construcción de…"), con tecnología y resultado cuando exista. Aplica también a la experiencia académica.
- Perfil: conservar la voz y el tono originales del usuario (primera persona, "Soy…", "Me motiva…"); no reescribirlo con un estilo genérico.
- Habilidades: grupos de palabras clave (`\cvskillgroup`), sin calificaciones. Los nombres de herramientas nuevos se agregan a `\hyphenation{…}` para que no se partan con guion.
- Cursos: mostrar solo los 6 más recientes. Al agregar uno, mover el más antiguo al bloque comentado que está debajo de la sección en el `.tex`.
- Métricas, fechas y nombres: solo los que el usuario confirmó. Nunca inventar; si falta un dato, preguntar.
- Nombres canónicos: Protección S.A., Tuya S.A., Comercial Card S.A.S. (PTM), SIATA; Python, PySpark, MLflow, BigQuery, Vertex AI, Hugging Face, GCP.
- Referencias: las personas listadas autorizaron publicar sus datos de contacto, así que pueden versionarse aunque el repo sea público. Cualquier referencia nueva requiere la misma confirmación del usuario.

### Idiomas
- `cv-es.tex` es la fuente de verdad. `cv-en.tex` es una traducción a inglés técnico propio del campo, con la misma información y estructura: mismo número de viñetas, entradas, cursos (incluido el archivo comentado), etiquetas y los mismos enlaces. Nunca agregar en inglés datos que no estén en español.
- No traducir durante los cambios: al terminar una ronda de cambios en español, preguntar al usuario si se actualiza la versión en inglés.
- Convenciones en inglés:
  - Fechas `Mmm. YYYY` (Jan., Feb., Mar., Apr., May, Jun., Jul., Aug., Sep., Oct., Nov., Dec.); el cargo actual termina en `Present`; decimales con punto (0.80).
  - Ubicación de los cargos: `Medellín, Colombia`.
  - Términos locales con una breve aclaración: "customer requests and complaints (PQRS)", "SAGRILAFT AML compliance".
  - La tesis de maestría usa su título oficial en inglés (el del abstract).
  - La etiqueta de los cursos es `\cvcertlabel` = "Certificate".

### Sincronización CV → portafolio
El CV en español es la fuente de verdad para los hechos (cargos, empresas, fechas, títulos, certificaciones, URLs). El portafolio toma solo lo que necesita: puede resumir u omitir, pero nunca contradecir. Si un cambio en el CV afecta un dato que el portafolio muestra, actualizarlo en:

| CV (sección) | Portafolio |
|---|---|
| Experiencia laboral | `src/data/experience.ts` (ES y EN) |
| Estudios | `src/data/education.ts` |
| Cursos / certificaciones | `src/data/certifications.ts` (solo las curadas) |
| Habilidades | `src/data/skills.ts` |
| Perfil / tagline | `src/locales/{es,en}.ts` (hero, about), `index.html` (meta) |
| Tesis / proyectos | `src/data/projects.ts` |

Commits: `feat(cv): …`, `fix(cv): …`, `ci(cv): …`.