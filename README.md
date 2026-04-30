# API Node.js — Instalación y Ejecución

## Requisitos

Antes de empezar, asegúrate de tener instalado:

- Node.js (versión 18 o superior recomendada)
- npm (incluido con Node.js) o Yarn
- Git

### Verificación:

```bash
node -v
npm -v
git --version
```

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/usuario/tu-repo.git
cd tu-repo
```

Instala las dependencias:

```bash
npm install
```

## Configuración

Crea el archivo de entorno:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus valores reales. Ejemplo:

```env
PORT=3000
DATABASE_URL=tu_url_de_base_de_datos
JWT_SECRET=tu_clave_secreta
```

## Ejecución

### Modo desarrollo:

```bash
npm run dev
```

### Modo producción:

```bash
npm start
```

Si todo está correcto, deberías ver un mensaje indicando que el servidor está corriendo, por ejemplo:

```
Server running on http://localhost:3000
```

## Pruebas

Si el proyecto incluye pruebas:

```bash
npm test
```

## Estructura básica (referencial)

```
src/
├── controllers/
├── routes/
├── services/
├── models/
└── app.js / server.js
```

## Errores comunes

- **Dependencias no instaladas:** ejecutar  
  ```bash
  npm install
  ```

- **Puerto en uso:** cambiar el valor de `PORT` en `.env`

- **Variables de entorno faltantes:** revisar el archivo `.env`

- **Problemas con módulos:** eliminar `node_modules` y reinstalar dependencias  
  ```bash
  rm -rf node_modules
  npm install
  ```
