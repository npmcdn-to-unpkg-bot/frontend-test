// save as agreed.js
module.exports = [
  {
    request: {
      path: '/api/branches',
      method: 'GET',
    },
    response: {
      headers: {
        'x-csrf-token': 'csrf-token',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
      body: [
        {key: 1, author: 'テスト太郎', text: 'This is one comment'},
        {key: 2, author: 'テスト次郎', text: 'This is *another* comment'}
      ],
      values: {
      },
    },
  },
]
