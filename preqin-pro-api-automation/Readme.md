# Preqin Pro API Automation

JS based framework to run functional tests for prequin pro

### Tech
This framework uses the below tech/libraries to write our automated tests.
* [Request with typsescript](https://www.npmjs.com/package/request#promises--asyncawait) - Typescript provides code auto completion and helpful hints with a text editor like Microsoft's Visual Studio Code or another text editor with Typescript support.
* [cucumber](https://docs.cucumber.io/cucumber/) - Cucumber implementation for javascript for writing our scenarios using gherkin syntax
* [Chai](http://chaijs.com/api/bdd/) - Assertion library for verifying the results of our tests

### Installation only once locally
Make sure you have Node and NPM installed in your machine. After cloning the project, install all dependencies by running the below via the terminal:

```sh
$ cd preqin-pro-api-automation
$ npm install
```
For windows user, ensure you have java installed (https://www.java.com/en/)

Make sure you have typescript installed by running the following in the terminal:

```sh
$ npm instal -g typescript
```

Make sure you have a few from the list installed (The top 3 are important) via Market place extentions within your VS Code:
1. Cucumber (Gherkin) Full Support
2. npm commands for VS Code
3. GitLens -- Git Supercharged
4. Git History
5. VSCode-icons

This is relevant for binding the feature file to the step definition.

### Running tests
1. Use the below script to run the all the specs on your local (remember you have root directory):
    This has been configured inside the package.json file as a script.

```sh
  npm test
``` 

### Adding new tests
1. When adding new code / test, turn on the typscript complier via the terminal so it can transcribe it to javascript, if you don't you changes will not be picked up:
    `tsc -w`
2. You can add unique tags to your newly added scenario, remember to also add specify only this tag to the scripts within package.json file as well, for only your scenario to run.

### Debugging Test via VS Code

