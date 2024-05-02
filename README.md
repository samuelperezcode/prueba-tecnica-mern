<div align="center">
  <h1 align="center"><a aria-label="NextJs Monorepo" href="https://github.com/samuelperezcode">User Management project (MERN stack)</a></h1>
  <p align="center"><strong>Monorepo, using Express.js and React </strong></p>
</div>

## Install

```bash
pnpm install
```

## Structure

```
.
├── server
│   └── express.js api
└── web
    └── react vite.js app
```

## Monorepo essentials

### Monorepo scripts

Some convenience scripts can be run in any folder of this repo and will call their counterparts defined in packages and apps.

| Name                         | Description                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------- |
| `pnpm dev`           | Run develompent servers in all workspaces                   Display linter issues in all workspaces                                                        |
| `yarn test`           | Run unit and e2e tests in all workspaces                                                    |


### CI


## Deploy

## License