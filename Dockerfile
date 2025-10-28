FROM node:20-slim AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de manifiesto y de dependencia
# Copia el código fuente
COPY . .

# Instala las dependencias y ejecuta el build inmediatamente después
# Usamos un solo RUN para asegurar que el 'path' de instalación esté fresco.
# La variable --unsafe-perm es a veces necesaria en entornos Linux ligeros.
RUN npm install --unsafe-perm && \
    npm run build