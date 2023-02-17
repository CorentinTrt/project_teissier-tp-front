# starter-next.js \_v1.0.2

## How to use it ?

### Copy the project

- You can copy this repo as a templete directlty from GitHub
- After copying the repo, you can rename you Docker container to make them more relevant based on your project

### Run the project

- This project run with Docker
- Make sure to use docker-compose v2

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
