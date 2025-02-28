import { isNonEmptyString } from '@/src/is-non-empty-string';
import type { EnvOptions } from '@/src/types';

/**
 * Retrieves and validates an environment variable.
 *
 * @param name - The name of the environment variable to retrieve
 * @param options - Configuration options object
 * @param options.defaultValue - Optional fallback value if env var is undefined
 * @param options.pattern - Optional RegExp pattern to validate the env var value
 *
 * @throws {Error} When the environment variable:
 * - Is missing or empty and no default value is provided
 * - Doesn't match the specified pattern (if pattern is provided)
 *
 * @returns The validated environment variable value
 *
 * @example
 * ```ts
 * // Basic usage
 * const port = env('PORT', { defaultValue: '3000' });
 *
 * // With validation
 * const apiKey = env('API_KEY', {
 *   pattern: /^[A-Za-z0-9]{32}$/
 * });
 * ```
 */
export const env = (name: string, options: EnvOptions = {}): string => {
  const { defaultValue, pattern }: EnvOptions = options;

  const value = process.env[name] ?? defaultValue;

  if (!isNonEmptyString(value)) {
    throw new Error(
      `Environment variable ${name} is ${value === '' ? 'empty' : 'missing'}`,
    );
  }

  if (pattern && !pattern.test(value)) {
    throw new Error(
      `Environment variable ${name} does not match pattern ${pattern}`,
    );
  }

  return value;
};
