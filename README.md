<p align="center"><img alt="ESLint logo" src="https://avatars.githubusercontent.com/u/132620081?s=200&v=4" width="60" /></p>

<h1 align="center">@avenue3-dev/format-age</h1>
<p align="center">   
  <a href="https://github.com/@avenue3-dev/format-age/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@avenue3-dev/format-age?style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/@avenue3-dev/format-age">
    <img src="https://img.shields.io/npm/v/@avenue3-dev/format-age?style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/eslint-config-gbx">
    <img src="https://img.shields.io/npm/dw/@avenue3-dev/format-age?style=flat-square" />
  </a>
</p>

`format-age` is a tiny, dependency-free package for formatting age in clinical or health-related contexts. It displays age with appropriate granularity for different life stages—down to minutes for newborns and more concise formats for older individuals.

### Examples

- `21y` – 21 years
- `2y 2m` – 2 years, 2 months
- `21m 29d` – 21 months, 29 days
- `30w 4d` – 30 weeks, 4 days
- `26d` – 26 days
- `30mins` – 30 minutes

## Install

`format-age` is available as an npm package can be installed with one of the following commands:

<details> 
  <summary>
    <strong>npm</strong>
  </summary>

```bash
npm install @avenue3-dev/format-age
```

</details>

<details>
  <summary>
    <strong>pnpm</strong>
  </summary>

```bash
pnpm add @avenue3-dev/format-age
```

</details>

## Example

```js
// Birth date as a Date object
formatAge(new Date('2003-05-09'));
// → '21y'

// Birth date ISO 8601 string input
formatAge('2022-03-01');
// → '2y 2m'

// Calculating relative age or age of death
formatAge(new Date('2002-03-01'), new Date('2022-03-01'));
// → '20y'
```

## Changelog

Check out our [changelog](./CHANGELOG.md) for key highlights, performance improvements, new features, and notable bugfixes.

## License

Licensed under the [MIT License](./LICENSE).
