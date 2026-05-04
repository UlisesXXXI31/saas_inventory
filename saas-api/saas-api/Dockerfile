# ETAPA 1: COMPILACIÓN
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# Copiamos todo el contenido del repositorio
COPY . .

# Localizamos el gradlew (usando la ruta doble que tienes en GitHub)
RUN chmod +x ./saas-api/saas-api/gradlew

# Compilamos especificando la ruta al proyecto
RUN ./saas-api/saas-api/gradlew -p saas-api/saas-api bootJar --no-daemon

# ETAPA 2: EJECUCIÓN
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copiamos el JAR generado (la ruta de salida de Gradle es fija)
COPY --from=build /app/saas-api/saas-api/build/libs/app.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]