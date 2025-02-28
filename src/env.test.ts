import { env } from '@/src/env';

describe('env', () => {
  it('returns environment variable value when it exists', () => {
    vi.stubEnv('TEST_VAR', 'test-value');
    expect(env('TEST_VAR')).toBe('test-value');
    vi.unstubAllEnvs();
  });

  it('returns default value when environment variable is not set', () => {
    expect(env('MISSING_VAR', { defaultValue: 'default' })).toBe('default');
  });

  it('throws error when environment variable is missing and no default provided', () => {
    expect(() => env('MISSING_VAR')).toThrow(
      'Environment variable MISSING_VAR is missing',
    );
  });

  it('throws error when environment variable is empty string', () => {
    vi.stubEnv('EMPTY_VAR', '');
    expect(() => env('EMPTY_VAR')).toThrow(
      'Environment variable EMPTY_VAR is empty',
    );
    vi.unstubAllEnvs();
  });

  it('validates value against pattern when provided', () => {
    vi.stubEnv('NUMERIC_VAR', '123');
    expect(env('NUMERIC_VAR', { pattern: /^\d+$/ })).toBe('123');
    vi.unstubAllEnvs();
  });

  it('throws error when value does not match pattern', () => {
    vi.stubEnv('INVALID_VAR', 'abc');
    expect(() => env('INVALID_VAR', { pattern: /^\d+$/ })).toThrow(
      'Environment variable INVALID_VAR does not match pattern /^\\d+$/',
    );
    vi.unstubAllEnvs();
  });
});
