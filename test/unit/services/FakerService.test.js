'use strict'
/* global describe, it */

const assert = require('assert')

describe('FakerService', () => {
  it('should exist', () => {
    assert(global.app.api.services['FakerService'])
  })
})
