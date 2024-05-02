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
| `pnpm dev`           | Run develompent servers in all workspaces                                               |
| `pnpm lint`             |   Display linter issues in all workspaces                                                       |
| `pnpm test`           | Run unit and e2e tests in all workspaces                                                    |


## Quality

### Linters

See an example in [./apps/nextjs-app/.eslintrc.js](./apps/nextjs-app/.eslintrc.js) and our
[eslint-config-bases](./packages/eslint-config-bases/README.md).

### Hooks / Lint-staged

Check the [.husky](./.husky) folder content to see what hooks are enabled. Lint-staged is used to guarantee
that lint and prettier are applied automatically on commit and/or pushes.

### Tests

### CI

## 7. Deploy

## License