# OpenHIM Docs

This repository contains all the scripts and files for running the OpenHIM website as well as the documentation sections for the OpenHIM.

[https://jembi.github.io/openhim-docs/](https://jembi.github.io/openhim-docs/)

## Local development

### Prerequisite

Ensure that you have Docusaurus installed globally to be able to run the project locally for development.

```sh
yarn global add docusaurus
```

or

```sh
npm install --global docusaurus
```

### Running the development environment

Ensure that you are within the `website` directory to start up the local development server.

Execute the below commands to download the dependencies and start the development server.

```sh
yarn && yarn start
```

or

```sh
npm install && npm start
```

If port `3000` isnt being used by another service, you should see the website successfully start up at [http://localhost:3000/openhim-docs/](http://localhost:3000/openhim-docs/)

Any changes made to the existing scripts should automatically reload the relevant changes. Any new files will require the server to be restarted to load them as a files to be watched

## Deploy updated version

Ensure that the latest changes have been reviewed and pushed into the master branch before deploying the changes.

To deploy the latest documentation changes, execute the below command:

```sh
GIT_USER=<GIT_USERNAME> USE_SSH=true yarn deploy
```
