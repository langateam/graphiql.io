'use strict'
/* global describe, it */

const assert = require('assert')

describe('Company Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Company'])
  })
})
