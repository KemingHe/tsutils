import * as index from '@/src/index';
import type { EnvOptions } from '@/src/index';

describe('Public API Exports', () => {
  it('exports expected functions', () => {
    expect(index).toHaveProperty('env');
    expect(index).toHaveProperty('isNonEmptyString');

    // Verify the exports are of the correct JS type
    expect(typeof index.env).toBe('function');
    expect(typeof index.isNonEmptyString).toBe('function');
  });

  // Fails at compile time if the types are not exported
  it('exports expected types', () => {
    const options: EnvOptions = {
      defaultValue: 'test',
      pattern: /test/,
    };
    expect(options).toBeDefined();
  });

  it('exported functions maintain their functionality', () => {
    // Basic smoke test for isNonEmptyString
    expect(index.isNonEmptyString('test')).toBe(true);
    expect(index.isNonEmptyString('')).toBe(false);

    // Basic smoke test for env
    vi.stubEnv('TEST_VAR', 'test-value');
    expect(index.env('TEST_VAR')).toBe('test-value');
    vi.unstubAllEnvs();
  });
});
