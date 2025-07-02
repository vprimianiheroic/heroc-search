const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { type, account } = event.queryStringParameters || {};
  const apiKey = process.env.HEROIC_API_KEY;

  if (!type || !account) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required parameters: type and account' })
    };
  }
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing HEROIC_API_KEY environment variable' })
    };
  }

  const url = `https://api.heroic.com/v7/breach-search?type=${encodeURIComponent(type)}&account=${encodeURIComponent(account)}`;

  try {
    const resp = await fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    });
    const data = await resp.json();
    return {
      statusCode: resp.status,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch from HEROIC API', details: err.message })
    };
  }
}; 