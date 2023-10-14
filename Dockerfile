# Usa una imagen de Node.js como base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de la aplicación al directorio de trabajo
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src

# Instala las dependencias
RUN npm install

# Compila la aplicación
RUN npm run build

# Expone el puerto en el que la aplicación escucha
EXPOSE 3000

# Inicia la aplicación
CMD ["node", "dist/main"]
