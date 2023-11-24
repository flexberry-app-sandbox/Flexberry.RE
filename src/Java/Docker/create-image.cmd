docker build --no-cache -f SQL\Dockerfile.PostgreSql -t re-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t re-java/app ../../..
