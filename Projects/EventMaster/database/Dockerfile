# Use an official MySQL image
FROM mysql:5.7

# Set the environment variables
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=eventmaster
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

# Copy the initialization SQL file
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the port
EXPOSE 3306

