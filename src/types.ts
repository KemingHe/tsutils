/**
 * Options for configuring environment variable retrieval and validation.
 *
 * @example
 * ```ts
 * const apiKey = env('API_KEY', {
 *   defaultValue: 'dev-key',
 *   pattern: /^[A-Za-z0-9]+$/
 * });
 * ```
 */
export interface EnvOptions {
  /**
   * Fallback value to use if the environment variable is not set.
   * If not provided and the env var is missing, an error will be thrown.
   */
  defaultValue?: string;

  /**
   * Regular expression pattern to validate the environment variable value.
   * If provided and the value doesn't match, an error will be thrown.
   */
  pattern?: RegExp;
}
