module.exports.hello = async (event) => {
  // eslint-disable-next-line no-console
  console.log('this is a log!!!');

  return {
    statusCode: 200,
    body: {
      message: 'Deploy Lambda function using Travis CI!!!',
      input: JSON.stringify(event, null, 2),
    },
  };
};
