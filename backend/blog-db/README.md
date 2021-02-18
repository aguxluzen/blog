## Instalar dependencias

npm install

## Hacer estructura de base de datos

node setup.js

## Insertar un post

node examples/post.js

# Docker

## Crear Red

```
docker network create --driver bridge pgnetwork
```

## Preparar Ambiente

El comando crea un archivo pg-env.list, éste archivo va a ser tomado por docker para configurar las variables de entorno del contenedor de postgre

```
cat << EOF > pg-env.list
PG_MODE=primary
PG_PRIMARY_USER=postgres
PG_PRIMARY_PASSWORD=datalake
PG_DATABASE=hippo
PG_USER=hippo
PG_PASSWORD=datalake
PG_ROOT_PASSWORD=datalake
PG_PRIMARY_PORT=5432
EOF
```

El siguiente comando también crea un archivo con las variables de entorno para el administrador de postgre

```
cat << EOF > pgadmin-env.list
PGADMIN_SETUP_EMAIL=hippo
PGADMIN_SETUP_PASSWORD=datalake
SERVER_PORT=5050
EOF
```

docker run --publish 5432:5432 \
  --volume=postgres:/pgdata \
  --name="postgres" \
  --hostname="postgres" \
  --network="pgnetwork" \
  --detach \
  -e "POSTGRES_PASSWORD=datalake" \
  postgres

  docker run --publish 5050:5050 \
  --volume=pgadmin4:/var/lib/pgadmin \
  --name="pgadmin4" \
  --hostname="pgadmin4" \
  --network="pgnetwork" \
  --detach \
  -e "POSTGRES_PASSWORD=datalake" \
  -e "POSTGRES_USER=postgres" \
  -e "PGADMIN_DEFAULT_EMAIL=root@root.com" \
  -e "PGADMIN_DEFAULT_PASSWORD=datalake" \
  -e "PGADMIN_LISTEN_PORT=5050" \
  dpage/pgadmin4