const handler = async (event) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'ok', message: 'Debug function is working' })
  };
};

exports.handler = handler; 