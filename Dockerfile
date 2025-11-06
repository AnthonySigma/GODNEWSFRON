FROM node:20-slim AS builder

#establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de manifiesto y de dependencia
# Copia el código fuente
COPY . .

#instala las dependencias de instalacion

RUN npm install --unsafe-perm && \
    npm run build