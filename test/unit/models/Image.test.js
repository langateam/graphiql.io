'use strict'
/* global describe, it */

const assert = require('assert')

describe('Image Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Image'])
  })
})
