'use strict'
/* global describe, it */

const assert = require('assert')

describe('AddressService', () => {
  it('should exist', () => {
    assert(global.app.api.services['AddressService'])
  })
})
