# @keminghe/tsutils

![tsutils social preview - TypeScript utility package by KemingHe](https://socialify.git.ci/KemingHe/tsutils/image?description=1&language=1&name=1&owner=1&theme=Light)

![NPM Version](https://img.shields.io/npm/v/%40keminghe%2Ftsutils)
![NPM License](https://img.shields.io/npm/l/%40keminghe%2Ftsutils)
[![codecov](https://codecov.io/gh/KemingHe/tsutils/graph/badge.svg?token=zipOygWCTa)](https://codecov.io/gh/KemingHe/tsutils)

TypeScript-first utility library for modular code organization and management. Social preview generated with [Socialify](https://socialify.git.ci).

## ⭐ Features

- 📝 Full TypeScript support with comprehensive type definitions
- ⚡️ Zero runtime dependencies with 100% test coverage
- 🔄 Automated releases with Git hooks and strict linting

## 📥 Installation

```bash
npm install @keminghe/tsutils
```

## 🚀 Usage

### Environment Variable Utility

```typescript
import { env } from '@keminghe/tsutils';

// Basic usage
// Throws runtime error if API_KEY is missing or empty
const apiKey: string = env('API_KEY');

// With default value and pattern validation
const port: string = env('PORT', {
  defaultValue: '3000',
  pattern: /^[0-9]+$/
});
```

### String Validation

```typescript
import { isNonEmptyString } from '@keminghe/tsutils';

const value = 'hello';
if (isNonEmptyString(value)) {
  // TypeScript knows value is string here
  console.log(value.toUpperCase());
}
```

## 📚 API

### `env(name: string, options?: EnvOptions): string`

Retrieves and validates an environment variable value.

**Parameters:**

- `name` - Environment variable name
- `options` - Optional configuration object
  - `defaultValue?: string` - Fallback if env var is not set
  - `pattern?: RegExp` - Validation pattern to test against

**Returns:**

- `string` - The validated environment variable value

**Throws:**

- `Error` if the variable is missing/empty with no default
- `Error` if the value doesn't match the specified pattern

```typescript
// Examples
const apiKey = env('API_KEY');  // Throws if not set

const port = env('PORT', {
  defaultValue: '3000',
  pattern: /^\d+$/
});
```

### `isNonEmptyString(value: unknown): value is string`

Type guard that checks if a value is a non-empty string.

**Parameters:**

- `value` - Any value to test

**Returns:**

- `boolean` - `true` if value is a non-empty string

```typescript
const input = someValue;
if (isNonEmptyString(input)) {
  // TypeScript knows input is string here
  console.log(input.length);
}
```

## ⚙️ Development

```bash
pnpm install  # Install dependencies
pnpm test     # Run tests
pnpm build    # Build package
pnpm verify   # Full verification
```

## 🏷️ Release Process

See [Tag and Publish Guide](https://github.com/KemingHe/tsutils/blob/main/docs/tag-and-publish.md) for detailed instructions on:

- Setting up GPG signing
- Creating signed Git tags
- Automatic NPM publishing via GitHub Actions

## 🤝 Contributing

1. Fork the repository to your GitHub account
2. Create a feature branch (`git checkout -b feature/my-update`)
3. Make changes and commit (`git commit`) with Commitizen
4. Push your changes (`git push origin feature/my-update`)
5. Create a Pull Request for code review

## 📄 License

[MIT License](https://github.com/KemingHe/tsutils/blob/main/LICENSE)

Copyright 2025 [Keming He](http://linkedin.com/in/keminghe)
