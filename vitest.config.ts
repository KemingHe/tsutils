import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],

  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.?(c|m)[jt]s?(x)'],

    // Disable watch mode for routine and CI.
    watch: false,

    // Run setup file before tests.
    setupFiles: ['vitest.setup.ts'],

    // Allow tests to pass even if no test files are found.
    // passWithNoTests: true,

    coverage: {
      provider: 'v8',
    },
  },
});
