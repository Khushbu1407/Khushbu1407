FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY src/CurrentDateTime.java /app/CurrentDateTime.java

RUN javac CurrentDateTime.java

CMD ["java" , "CurrentDateTime"]
