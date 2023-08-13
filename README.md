# Teissier TP - Next App

## Run the project

#### Development

- `$ yarn docker-dev`
  -> That will run a docker-compose script and enable hot-reload

#### Production

- `$ yarn docker-prod`
  -> That will create a standalone build runnable through Docker

## Linting & formating

- On this project, there is eslint and stylelint enable with standard rules
- There is also prettier installed and setup, make sure to use prettier as default formater

## Husky

- We are using pre-commit hooks to unsure the respect of linting & formatting rules
- Make sure to have Husky installed (automatic) and running when you make a commit
