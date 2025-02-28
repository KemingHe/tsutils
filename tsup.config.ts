import { defineConfig } from 'tsup';

import pkg from '@/package.json';

// Documents package usage
const banner: string = `
/**
 * @package ${pkg.name}
 * @version ${pkg.version}
 * @license ${pkg.license}
 * @copyright (c) ${new Date().getFullYear()} ${pkg.author.name}
 * @author ${pkg.author.name} <${pkg.author.email}>
 * @homepage ${pkg.homepage}
 * 
 * ${pkg.description}
 * 
 * Build Info:
 * - Format: ESM + CommonJS dual package
 * - Target: Node.js 14+
 * - Generated: ${new Date().toISOString()}
 * 
 * Repository: ${pkg.repository.url.replace('git+', '')}
 * Report issues: ${pkg.bugs.url}
 */
`;

export default defineConfig(
  // biome-ignore format: added alignment for clarity
  {
    /** Build Configuration */
    entry: ['src/index.ts'],   // Starting point for bundling, exports public API
    clean: true,               // Prevents stale builds by cleaning output dir
    
    /** Output Format Support */
    format: ['esm', 'cjs'],   // Support both modern ESM and legacy CJS environments
    dts   : true,             // Enable TypeScript types for IDE support and type safety
    outExtension({ format }) {
      return {
        js: format === 'cjs' ? '.cjs' : '.mjs',   // Explicit extensions for Node.js dual package support
      };
    },
    
    /** Performance Optimizations */
    splitting: true,   // Enables code-splitting for better tree-shaking in modern bundlers
    treeshake: true,   // Removes dead code for smaller bundles
    minify   : true,   // Reduces bundle size for production
    sourcemap: true,   // Enables debugging in development
    
    /** Compatibility Settings */
    target  : 'node14',   // Balances modern features with broad compatibility
    external: [],         // Keeps dependencies external to avoid version conflicts
    
    /** Package Metadata */
    banner: { js: banner },
  },
);
