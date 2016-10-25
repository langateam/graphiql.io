'use strict'
/* global describe, it */

const assert = require('assert')

describe('Address Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Address'])
  })
})
