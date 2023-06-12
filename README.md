# Walcron Microfrontend Profiler

Microfrontend used to maintain users in system

## Deployment

1. Create a Github PAT (classic), with only read:packages access.
2. Login locally into github NPM repo with the PAT.

`npm login --scope=@yoonghan --auth-type=legacy --registry=https://npm.pkg.github.com/`

3. Copy in ~/.npmrc into vercel's variable NPM_RC. Basically the varible will contain:

```
//npm.pkg.github.com/:_authToken=...
@yoonghan:registry=https://npm.pkg.github.com/
```
