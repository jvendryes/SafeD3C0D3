# Contributing
First off, thank you for showing interest in contributing!

Contributing should be easy and welcoming, following this guide should help you get started.

## Ground Rules
- Be kind, respectful, and constructive
- Care about quality by:
    - Testing your changes and add new tests if needed
    - Ensuring existing tests and linters pass
    - Documenting your code and your changes

## How To Contribute
There are many ways you can help contribute, here are a few examples:
- New functionality
- Security improvements
- UI or UX improvements
- Bug fixes
- Performance tuning
- Automated testing
- Improving documentation

### Issue Tracking
[GitHub issues] are used for all contributions. Feature requests, improvements and bug reports should be created as an 
issue. Issue templates are in place so be sure to pick the correct type.

## Development
The [Angular CLI] is used for development. To start the project with the CLI run `ng serve`.

This project follows [Semantic Versioning], please ensure that you update version numbers as appropriate.

### Coding Style
This is an Angular app, following the [Angular Style Guide] is the chosen best practice.

### Linting
Angular uses [TSLint] and [Codelyzer] for it's linting rules. Run the linter with `ng lint`.

### Code Formatting
This project is using [Prettier] rules for code formatting. You'll find the defined rules in the `.prettierrc.json` file 
and while files that won't be formatted in the `.prettierignore` file. To ensure consistent formatting, a 
[Git pre-commit hook] is defined in the `package.json` file.

Conflicting Prettier and TSLint rules have been removed from the `tslint.json` file which results in TSLint only 
concerning itself with linting and Prettier only concerning itself with formatting.

### Testing
This project utilizes the standard testing libraries provided by the Angular CLI. Read the 
[Angular testing documentation] for more information.

#### Unit Tests
Angular uses [Jasmine] as it's test framework. Run the tests with: `ng test`.

#### End-to-end Tests
Angular uses [Protractor] for end-to-end testing. Run the tests with: `ng e2e`.

## Submitting Pull Requests
Your pull requests are welcome, here is the process:
- Fork the repo and create a branch from `master`
- Care about quality (see [Ground Rules])
- Open a detailed pull request with reference to any issue numbers

### Reviews
The goal is to review your pull request in a timely manner. Not all pull requests are accepted, for example:
- Features that don't fit with roadmap
- Coding style guidelines are not met
- Tests are failing
- Linting errors
- Identified security vulnerabilities

When in doubt, feel free to ask!

[Github issues]: https://github.com/jvendryes/SafeD3C0D3/issues
[Ground Rules]: #ground-rules
[Angular Style Guide]: https://angular.io/guide/styleguide
[Angular CLI]: https://cli.angular.io/
[Semantic Versioning]: https://semver.org/spec/v2.0.0.html
[Angular testing documentation]: https://angular.io/guide/testing
[Jasmine]: https://jasmine.github.io/
[Protractor]: https://www.protractortest.org/
[Prettier]: https://prettier.io/
[Git pre-commit hook]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
[TSLint]: https://palantir.github.io/tslint/
[Codelyzer]: https://github.com/mgechev/codelyzer
