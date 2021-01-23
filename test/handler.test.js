const { hello } = require('../index');

describe('basic index test', () => {
  test('should return data', async () => {
    const event = {};
    const actualValue = await hello(event);

    expect(actualValue).toBe('Deploy Lambda function using Travis CI!!!');
  });
});
