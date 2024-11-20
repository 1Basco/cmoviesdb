## 1. Clonar o repositório

```bash
git clone https://github.com/1Basco/cmoviesdb.git
cd cmoviesdb
```

## 2. Instalar as dependências

Instale as dependências do projeto usando o Yarn ou npm:
Usando Yarn:

```bash
yarn install
```

Usando npm:

```bash
npm install
```

## 3. Configurar o arquivo .env

O projeto requer uma chave de API que deve ser definida em um arquivo de variáveis de ambiente.

Copie o arquivo .env.example para um novo arquivo chamado .env:

```bash
cp .env.example .env
```

Abra o arquivo .env e adicione a chave da API fornecida:

```bash
VITE_TMDB_API_KEY=SUA_CHAVE_DE_API_AQUI
```

Nota: Certifique-se de substituir SUA_CHAVE_DE_API_AQUI pela chave de API correta fornecida. Se você não tiver uma chave de API, consulte a documentação do [TMDB](https://developer.themoviedb.org/reference/intro/getting-started).

##4. Rodar o projeto

Agora que o arquivo .env está configurado corretamente, você pode rodar o projeto em seu ambiente local.
Usando Yarn:

```bash
yarn dev
```

Usando npm:

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento e você poderá acessar a aplicação em:

http://localhost:5173
