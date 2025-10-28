# -------------------------------------------------------------------------
# ETAPA 1: BUILDER (Compilación del Proyecto)
# Usamos una imagen de Node.js para tener el entorno necesario para compilar.
# -------------------------------------------------------------------------
FROM node:20-slim AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de manifiesto y de dependencia
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos de código fuente
COPY . .

# Comando de compilación (Asegúrate de que 'npm run build' exista en tu package.json)
RUN npm run build 


# -------------------------------------------------------------------------
# ETAPA 2: RUNTIME (Servidor Final Ligero)
# Usamos Nginx para servir los archivos compilados de forma rápida y segura.
# -------------------------------------------------------------------------
FROM nginx:stable-alpine

# Copia la configuración predeterminada de Nginx para servicios estáticos
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos compilados desde la etapa 'builder'
# (AJUSTA /app/build si tu proyecto usa /app/dist)
COPY --from=builder /app/build /usr/share/nginx/html

# Expone el puerto por defecto de Nginx
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]