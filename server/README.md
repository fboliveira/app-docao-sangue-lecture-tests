# Steps

```bash
npm init -y

npm install express
npm install nodemon -D
npm install prisma -D

# Run Prisma CLI
npx prima 

# Prisma init
npx prisma init
# Folder prisma and .env are created.

```

- Configurar .env
  - Utilizar docker para o SGBD:
  - ```docker pull postgres```
  - Run postgres: ```docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres```
  - Instalar portainer?
- Instalar extensões - prisma e prisma insider
- Definir schema

```bash
npx prisma migrate --help
npx prisma migrate dev

```

- Definir o database/cliente

- Definir o controller

- Definir as rotas

- Invocar o método post com os parâmetros para criação do estado

- Iniciar o prisma studio: npx prisma studio

- Criar a tabela de cidades com @relation

- npx prisma format <- criar a relação estado-cidade

- Migrate again!

- Parei aqui: <https://youtu.be/nuLTwqPNq-w?t=3953>

## Referências

- <https://github.com/rocketseat-content/prisma_decode>

- <https://youtu.be/nuLTwqPNq-w>


## Web

<https://reactjs.org/docs/static-type-checking.html#using-typescript-with-create-react-app>
npx create-react-app my-app --template typescript
