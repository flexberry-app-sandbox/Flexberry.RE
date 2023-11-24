docker build --no-cache -f SQL\Dockerfile.PostgreSql -t re/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t re/app ../..
