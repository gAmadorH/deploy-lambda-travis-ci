const { hello } = require('../handler');

describe('basic handler test', () => {
  test('should return data', async () => {
    const event = {};
    const actualValue = await hello(event);

    expect(actualValue).toHaveProperty('statusCode', 200);
    expect(actualValue).toHaveProperty('body');
    expect(actualValue.body).toHaveProperty('message', 'Deploy Lambda function using Travis CI!!!');
    expect(actualValue.body).toHaveProperty('input', {});
  });
});
