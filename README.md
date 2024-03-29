# Walcron Microfrontend Profiler
 
Microfrontend used to maintain users in system

---

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]

## Development commands

Firstly clone from the repository and download the necessary dependencies.

`npm install`

To execute the program for development

`npm run dev`

To run tests

`npm run test`

To build for container / module federation use. If builds successfully a dist/assets/remoteEntry.js will be generated.

`npm run build`

To build for typescripting for module federation use. If builds successfully a dist/typings/type.d.ts will be generated.

`npm run build:tsc`

## Deployment

1. Create a Github PAT (classic), with only read:packages access.
2. Login locally into github NPM repo with the PAT.

`npm login --scope=@yoonghan --auth-type=legacy --registry=https://npm.pkg.github.com/`

3. Copy in ~/.npmrc into vercel's variable NPM_RC. Basically the varible will contain:

```
//npm.pkg.github.com/:_authToken=...
@yoonghan:registry=https://npm.pkg.github.com/
```

## Github PAT permission required

1. For accessing private repo, please allow Profile -> Settings -> Personal Access Token (classic), open read:packages (basically th esame as vercel deployment). For more info refer: https://docs.github.com/en/packages/working-with-a-github-packages-registry. Add as Github secret in Settings->Secrets And variable and add NPM_TOKEN key. NOTE: In merge NODE_AUTH_TOKEN is used instead.
2. Create a PAT for microfrontend-container repository, with these permission , personal profile -> Developer Settings -> Fine Grain Token -> Actions(R)/Commit Statues(RW)/Contents(RW)/Metadata(R)/Pull Request(RW). Add into secret variable with key of CONTAINER_PAT.
3. Add 2 repository variables(not secret), GH_USER_NAME and GH_USER_EMAIL for distribution commit.

## POC

1. Bootstrap from vite directly.
2. Test cases can be run independantly.
3. Extension of libraries that can be shared; tested on React, ReactDOM, React router, MUI.

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/walcron-microfrontend-profiler/pull-request.yml
[build]: https://github.com/yoonghan/walcron-microfrontend-profiler/actions?query=workflow
[coverage-badge]: https://img.shields.io/codecov/c/github/yoonghan/walcron-microfrontend-profiler.svg?style=flat-square
[coverage]: https://codecov.io/gh/yoonghan/walcron-microfrontend-profiler
