# 📚 Catálogo de Livros

Uma aplicação web desenvolvida com React e TypeScript para gerenciamento de um catálogo de livros.

O projeto permite cadastrar, visualizar e remover livros, utilizando a API do CrudCrud para armazenar os dados de forma persistente.

---

## 📸 Demonstração

### Tela principal

![Tela principal](./screenshots/tela-principal.png)

### Cadastro de livros

![Cadastro de livros](./screenshots/cadastro-livros.png)

### Lista de livros

![Lista de livros](./screenshots/lista-livros.png)

---

## ✨ Funcionalidades

- 📖 Listagem de livros cadastrados
- ➕ Cadastro de novos livros
- 🗑️ Remoção de livros
- 📌 Definição do status de leitura
- 🔄 Integração com API REST
- ⏳ Estado de carregamento
- ⚠️ Tratamento de erros
- 📱 Interface responsiva
- 🎨 Interface com efeito glassmorphism
- ♿ Labels associados aos campos do formulário

---

## 🛠️ Tecnologias utilizadas

- React
- TypeScript
- Vite
- Axios
- CSS
- CrudCrud API
- Git e GitHub

---

## 📂 Estrutura do projeto

```text
src/
├── components/
│   ├── BookForm.tsx
│   ├── BookItem.tsx
│   └── BookList.tsx
│
├── services/
│   └── api.ts
│
├── types/
│   └── book.ts
│
├── App.tsx
├── index.css
└── main.tsx

screenshots/
├── cadastro-livros.png
├── lista-livros.png
└── tela-principal.png
```

## 🌐 Integração com a API

A aplicação utiliza a API do CrudCrud para realizar as operações de gerenciamento dos livros.

As principais requisições utilizadas são:

 GET

Busca os livros cadastrados na API.

GET /books
POST

Cadastra um novo livro.

POST /books
DELETE

Remove um livro utilizando seu identificador único.

DELETE /books/:id

O identificador _id é gerado automaticamente pela API após o cadastro do livro.


## 📋 Estrutura dos dados

Cada livro possui as seguintes informações:

interface Book {
  _id: string;
  title: string;
  author: string;
  status: "Lido" | "Não lido";
}

O _id é gerado pela API, enquanto título, autor e status são fornecidos pelo usuário através do formulário.

## ⚙️ Como executar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/)
* npm, que acompanha a instalação do Node.js.

### 1. Clone o repositório

```bash
git clone (https://crudcrud.com/api/0d1c80059e4c43508a9e0d7afe11881b/books)
```

### 2. Entre na pasta do projeto

```bash
cd catalogo-livros
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a API

Crie ou configure uma instância na [CrudCrud](https://crudcrud.com/) e utilize o endpoint disponibilizado para a sua aplicação.

Verifique o arquivo `src/api.ts` e configure a URL correspondente, respeitando o formato exigido pela API.

**Importante:** os endpoints da CrudCrud podem expirar. Confira se a URL está ativa antes de executar a aplicação.

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço local informado pelo Vite no terminal.

## 🎨 Interface

A interface foi desenvolvida utilizando uma paleta de cores em tons pastel de verde e azul, com elementos de glassmorphism para criar uma aparência leve e moderna.

A aplicação também possui comportamento responsivo, adaptando a disposição dos elementos para diferentes tamanhos de tela.

## 🧠 Aprendizados e conceitos aplicados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de React e TypeScript, incluindo:

- Criação e organização de componentes;
- Tipagem com TypeScript;
- Interfaces e tipos;
- Tipagem de props;
- useState;
- useEffect;
- Formulários controlados;
- Eventos em React;
- Funções assíncronas;
- Consumo de APIs REST;
- Axios;
- Requisições GET, POST e DELETE;
- Tratamento de erros com try/catch;
- Renderização condicional;
- Comunicação entre componentes;
- Responsividade com CSS;
- Organização de projetos React.

## 🚀 Melhorias futuras

Algumas funcionalidades que podem ser adicionadas futuramente:

✏️ Edição de livros;
🔎 Pesquisa por título ou autor;
🔽 Filtros por status de leitura;
📄 Paginação;
🔔 Mensagens visuais de sucesso e erro;
🌙 Modo escuro.

## 👩🏽‍💻 Autoria

Desenvolvido por Isabela Soares como projeto de estudo em React e TypeScript.

Este projeto faz parte da minha jornada de aprendizado e transição para a área de tecnologia.

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

⭐ Se este projeto despertou seu interesse, fique à vontade para explorar o código e acompanhar minha evolução como desenvolvedora.


[def]: catalogo-livros/screenshots/
