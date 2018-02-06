
# Developing

## Built With
* Electron
* React
* Redux

## Prerequisites
* Node (recommended with [nvm](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/en/docs/install)

## Setting up Dev

```shell
git clone https://github.com/LFBVR/developer-vault.git
cd developer-vault/
yarn install
```

This will clone current git repository in a developer-vault folder and install project dependencies through yarn.

## Building

Developer-vault is still in early phases of development and production build instructions should come soon.

```
yarn run build
```

## Deploying / Publishing

Developer-vault is still in early phases of development and deployment instructions should come soon.

# Versioning

We use [SemVer](http://semver.org/) for versioning. 
For the versions available, see the [releases](https://github.com/LFBVR/developer-vault/releases).

# Database

Developer-vault is still in early phases of development and app model should come soon.

# Configuration

Developer-vault is still in early phases of development and configuration instructions should come soon.

# Tests

Developer-vault is still in early phases of development and tests instructions should come soon.
```sh
yarn run test
```

# Style guide

Developer-vault is still in early phases of development and linting instructions should come soon.

```sh
yarn run lint
```

# Commit Message Format
We chose to follow [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit/blob/master/CONTRIBUTING.md) convention.

Each commit message should include a **type**, a **scope** and a **subject**:

```
 <type>(<scope>): <subject>
```

Lines should not exceed 100 characters. This allows the message to be easier to read on github as well as in various git tools and produces a nice, neat commit log ie:

```
 #271 feat(standard): add style config and refactor to match
 #270 fix(config): only override publicPath when served by webpack 
 #269 feat(eslint-config-defaults): replace eslint-config-airbnb 
 #268 feat(config): allow user to configure webpack stats output 
``` 

## Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

## Scope

The scope could be anything specifying place of the commit change. For example `webpack`,
`babel`, `redux` etc...

## Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end