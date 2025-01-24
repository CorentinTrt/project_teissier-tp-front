# Teissier TP - Next App

## Usages

```shell
$ yarn dev
# to run the project in development mode
```

```shell
$ yarn build
# to build the application
```

```shell
$ yarn build-docker
# to build a docker image of the project
```

## Linting & formating

- On this project, there is eslint and stylelint enable with standard rules
- There is also prettier installed and setup, make sure to use prettier as default formater

## Husky

- We are using pre-commit hooks to unsure the respect of linting & formatting rules
- Make sure to have Husky installed (automatic) and running when you make a commit

## Deployment

This project is deployed with Cloud Run and Cloud Build. A build is triggered on a push on the `main` branch.
