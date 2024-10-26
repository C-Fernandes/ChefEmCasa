# Fase de construção
FROM maven:3.8.5-openjdk-17 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo pom.xml e o diretório src para o container
COPY pom.xml .
COPY src ./src

# Executa o Maven para construir a aplicação e criar o JAR
RUN mvn clean package -DskipTests

# Fase de execução
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o JAR gerado da fase de construção para a fase de execução
COPY --from=build /app/target/*.jar /app/app.jar

# Expõe a porta que a aplicação Spring Boot utiliza (geralmente 8080)
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["java", "-jar", "/app/app.jar"]
