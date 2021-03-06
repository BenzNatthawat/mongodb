const assert = require('assert')
const User = require('../src/user')

describe('Creating records', () => {
  it('saves a user', (done) => {
    const joe = new User({ name: 'Joe', postCount: 1 })
    joe.save()
      .then(() => {
        // Has joe been save successfully?
        assert(!joe.isNew)
        done()
      })
  })
})