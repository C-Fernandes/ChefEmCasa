# Usa uma imagem base do OpenJDK versão 21 com perfil slim (mínimo possível)
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo .jar da pasta target para o diretório /app dentro do container
COPY target/*.jar /app/app.jar

# Expõe a porta que a aplicação Spring Boot utiliza (geralmente 8080)
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["java", "-jar", "/app/app.jar"]