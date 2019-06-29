# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog], and this project adheres to [Semantic Versioning].

## [0.2.0] - 2019-06-29
### Changed
- Upgrade to Angular 8 from Angular 7
- Updated `@angular/cli` to 8.0.6
- Updated `@angular/core` to 8.0.3
- Updated NGINX Docker image to 1.17-alpine
- Updated Node Docker image to 10.16-slim

## [0.1.5] - 2019-04-03
### Added
- Updated tsconfig.json to set `noUnusedLocals` and `noImplicitAny` as `true`

### Changed
- Moved from `any` to `Event` type when parsing a JWT
- Updated the app and tests to work with new tsconfig options listed in "Added" above
- Updated `@angular/core` to 7.2.12

## [0.1.4] - 2019-04-01
### Changed
- Fixed the broken "Version" link with the proper path to the CHANGELOG.md file ([#12])

## [0.1.3] - 2019-04-01
### Changed
- Updated CONTRIBUTING.md with information
- Updated `@angular/cli` to 7.3.7
- Updated `@angular/core` to 7.2.11

## [0.1.2] - 2019-03-30
### Added
- Added happy path e2e tests (`ng e2e`)

### Changed
- Updated README.md with proper Docker Hub image
- Updated generated unit tests with dependencies so they pass (`ng test`)
- Updated some files to minimize linting errors (`ng lint`)

### Removed
- Unused error class code

## [0.1.1] - 2019-03-29
### Added
- Added CODEOWNERS
- Added Prettier
- Added a pre-commit hook for running Prettier

### Changed
- Updated README.md with Docker Hub information
- Reformatted app code with Prettier rules
- Disabled conflicting rules between Prettier and TSLint

## 0.1.0 - 2019-03-27
### Added
- Added a CHANGELOG.md
- Scaffolding for CONTRIBUTING.md
- Started to follow Semantic Versioning

### Changed
- Renamed SafeDC0D3 to SafeD3C0D3
- Bulma 0.7.4 update
- Made Angular routing default to the "JWT Decode" page
- Minor UI improvements
- Updated the README.md file with basic information

## 0.0.0 - 2019-03-23
### Added
- Basic Docker support

### Changed
- Minor UI improvements
- Angular 7.2 update
- Dependency updates

[Keep a Changelog]: https://keepachangelog.com/en/1.0.0/
[Semantic Versioning]: https://semver.org/spec/v2.0.0.html
[0.1.1]: https://github.com/jvendryes/SafeD3C0D3/releases/tag/0.1.1
[0.1.2]: https://github.com/jvendryes/SafeD3C0D3/releases/tag/0.1.2
[0.1.3]: https://github.com/jvendryes/SafeD3C0D3/releases/tag/0.1.3
[0.1.4]: https://github.com/jvendryes/SafeD3C0D3/releases/tag/0.1.4
[0.1.5]: https://github.com/jvendryes/SafeD3C0D3/releases/tag/0.1.5
[0.2.0]: https://github.com/jvendryes/SafeD3C0D3/releases/tag/0.2.0
[#12]: https://github.com/jvendryes/SafeD3C0D3/issues/12
