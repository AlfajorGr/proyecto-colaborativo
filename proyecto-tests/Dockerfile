# Imagen base
FROM node:18-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package.json package-lock.json* ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Ejecutar tests automáticamente al iniciar el contenedor
CMD ["npm", "test"]
