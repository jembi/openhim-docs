# Website

This website is built using Docusaurus 2, a modern static website generator.

### Installation

```bash
$ yarn
```

### Local Development

```bash
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Build a new documentation version

When building a new version of the documentation, ensure that once the the changes are merged into the `master` branch that you also create a tag release within the repository. This is important as the new version added to the website needs to point to a a release version to see any release notes

```bash
$ yarn run docusaurus docs:version 5.3.x
```

This command will build a new version of the documentation and set the new version as the latest.
When versioning, a copy of the docs directory is made, as well as a copy of the sidebar specific to the tagged version. 
