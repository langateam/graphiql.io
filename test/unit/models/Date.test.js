'use strict'
/* global describe, it */

const assert = require('assert')

describe('Date Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Date'])
  })
})
