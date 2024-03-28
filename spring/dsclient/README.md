# DSClient

API REST para CRUD de clientes, usando Spring Boot e o banco de dados embutido H2

## Tecnologias usadas

- Java
- [Spring Boot](https://spring.io/projects/spring-boot "Documentação do Spring Boot")
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa "Documentação do Spring Data JPA")
- [H2](https://www.h2database.com "Site do H2")
- [Heroku](https://www.heroku.com "Site do Heroku") (Implantação em produção)

API Publicada em: https://dsclient-roan.herokuapp.com


## Endpoints

#### Consultar um cliente
> - Método: `GET`  
> - URL: `/clients/:id`
> - Parâmetro de URL obrigatório: `id` = [integer]    
> ##### Exemplo de requisição: `GET /clients/20`
---

#### Consultar todos os clientes com paginação
> - Método: `GET`  
> - URL: `/clients`  
> - Parâmetros opcionais:  
>   + `page` = [integer]
>   + `linesPerPage` = [integer]
>   + `direction` = [string] (ASC | DESC)
>   + `orderBy` = [string] (name | cpf | income | birth_date | children | created_at)  
> ##### Exemplo de requisição: `GET /clients?page=0&linesPerPage=12&direction=ASC&orderBy=name`
---

#### Inserir um cliente
> - Método: `POST`  
> - URL: `/clients/`
> - Body (JSON): 
```json
                {
                    "name": [string],
                    "cpf": [string],
                    "income": [double],
                    "birthDate": [string](Formato: "AAA-MM-DDTHH:MM:SSZ"),
                    "children": [integer]
                }
````
> ##### Exemplo de requisição:
```json
                {
                    "name": "Fulano de Tal",
                    "cpf": "123.456.789-10",
                    "income": 12345.00,
                    "birthDate": "1234-12-12T12:34:56Z",
                    "children": 3
                }
````
---

#### Atualizar um cliente
> - Método: `PUT`  
> - URL: `/clients/:id`
> - Parâmetro de URL obrigatório: `id` = [integer]  
> - Body (JSON):
```json
                {
                    "name": [string],
                    "cpf": [string],
                    "income": [double],
                    "birthDate": [string](Formato: "AAA-MM-DDTHH:MM:SSZ"),
                    "children": [integer]
                }
````
---

#### Deletar um cliente
> - Método: `DELETE`  
> - URL: `/clients/:id`
> - Parâmetro de URL obrigatório: `id` = [integer] 
