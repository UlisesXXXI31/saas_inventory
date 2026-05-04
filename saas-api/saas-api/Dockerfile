# Etapa 1: Compilación
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# Copiamos todo el contenido del repo
COPY . .

# Entramos a la carpeta de la API, damos permisos y compilamos
RUN chmod +x ./saas-api/gradlew
RUN ./saas-api/gradlew -p saas-api bootJar --no-daemon

# Etapa 2: Ejecución
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Buscamos el JAR dentro de la carpeta build de saas-api
COPY --from=build /app/saas-api/build/libs/app.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]