'use strict'
/* global describe, it */

const assert = require('assert')

describe('Finance Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Finance'])
  })
})
