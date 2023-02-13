# Social_Network
## Descrição
É uma aplicação voltada para a criação de um usuário junto aos seus contatos, à qual o próprio usuário poderá adicionalo e vinculalo a sua lista de contatos

## Configurando seu ambiente para a utilização do projeto
````
Crie e configure o arquivo .env 
````

## Para inicializar a aplicação:
### PASSO 1 - Entre no diretório da api
````
cd api
````
### PASSO 2 - instale as dependencias (to Backend)
````
yarn
````
### PASSO 3 - volte para o diretório principal e vá para o diretório do frontend
````
cd frontend
````
### PASSO 4 - instale as dependencias (to Frontend)
````
yarn
````
### PASSO 5 - executar o comando para que a api comece a rodar(dentro do diretório da api)
````
yarn dev
````
### PASSO 6 - executar o comando para que a front comece a rodar(dentro do diretório da frontend)
````
yarn start
````

##Endpoint base da api:
````
http://localhost:3333
````

## Endpoints do serviço: (para testes na api)

<table>
    <thead>
        <tr>
            <th>Método</th>
            <th>Endpoint</th>
            <th>Responsabilidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/clients</td>
            <td>Criação de clients</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/clients</td>
            <td>Lista o client logado</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/clients/:id</td>
            <td>Atualiza um usuário</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/clients/:id</td>
            <td>Realiza um soft delete no client</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/login</td>
            <td>Gera o token de autenticação</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/contacts</td>
            <td>Criação de contatos</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/contacts</td>
            <td>Lista os contatos do client logado</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/contacts/:id</td>
            <td>Atualiza um contato do criado pelo client</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/contact/:id</td>
            <td>Realiza um soft delete no contato</td>
        </tr>
    </tbody>
</table>
