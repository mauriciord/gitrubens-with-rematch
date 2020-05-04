# GitRubens github explorer

demo: https://gitrubens.now.sh/

This project is a Github search explorer using Github v3 REST API to explore users and repositories. It's using some main tools like:
- ReactJS
- Typescript
- Redux
- [Rematch (redux framework)](https://rematch.github.io/rematch/#/README?id=rematch)
- React Router DOM
- [Ant design](https://ant.design/docs/react/introduce)
- Styled Components
- Polished
- Testing Library

### Environment variables
There is a `.env.example` demonstrating how to configure the REST API URL, so you can copy it and create some files:
- `.env.development.local`
- `.env.production.local`

### Deploy
This project is using the [Vercel for Github](https://vercel.com/github), so when there is a new commit from master, it will be deployed at almost in the same time.

- - -

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

- - -
### The challenge answers

O processo consiste na criação de um site onde será possível consultar usuários e repositórios
no GitHub, construir uma página para realizar o ranking dos melhores repositórios.

### Regras de uso:
1. ~~A busca de usuários deve ser realizada utilizando o Formulário~~
2. ~~Os dados do usuário devem vir acima de lista de repositórios~~.
3. ~~O resultado dos repositórios devem ser agrupado inicialmente de forma decrescente podendo
ser ordenado pela data de ultima atualização~~.
4. ~~Deverá ser criado uma página para mostrar suas ultimas 5 buscas~~.
    > EN: The input has an autocomplete with all the searches successed <br />
    PT-BR: O formulário de pesquisa possui um autocompletar com as últimas pesquisar que deram certo
5. Deverá ser criado uma página exibindo um ranking dos 5 usuários mais ativos dos GitHub.
    > EN: I didn't find any REST API endpoint to make this request <br />
    PT-BR: Não encontrei o endpoint da API REST v3 para essa requisição

### Regras de negócio:
1. ~~Deverá ser checado se o formulário foi preenchido.~~
2. ~~Os repositórios deveram ser ordenados pela data de atualização.~~
3. ~~Quando o usuário der F5 ou recarregar a página os dados não podem ser perdidos.~~
4. ~~Deverá consumir a seguinte API: https://api.github.com/~~

### Regras de Execução:
1. ~~Front escrito em React~~ & Typescript ;)
2. ~~Formulários utilizando Formik com Yup.~~
3. ~~Axios como client http.~~
4. ~~Site responsivo.~~
5. ~~IDE fica a sua escolha.~~

### Critérios de avaliação:
1. Organização do código.
2. Organização dos commits
3. Organização do repositório
4. O cumprimento de todas as regras estabelecidas
5. A criação de testes
