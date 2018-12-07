export function callResponse() {
  return {
    data: [{
      id: 1,
      title: 'TestTitle1',
      user: {
        username: 'TestUsername1'
      }
    }, {
      id: 2,
      title: 'TestTitle2',
      user: {
        username: 'TestUsername2'
      }
    }]
  }
}

export function expectedResult() {
  return [{
    id: 1,
    title: 'TestTitle1',
    userName: 'TestUsername1'
  }, {
    id: 2,
    title: 'TestTitle2',
    userName: 'TestUsername2'
  }];
}
