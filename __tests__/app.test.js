import App from '../src/index';

describe('app module', () => {
  test('it exists', async () => {
    expect(await App).toBeDefined();
  });

  test('it returns program name with SDGs', async () => {
    const result = await App();
    const sdgPos = (result || '').indexOf('SDG');
    // eslint-disable-next-line no-magic-numbers
    expect(sdgPos).toBeGreaterThanOrEqual(1);
  });
});
