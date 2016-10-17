'use strict'
/* global describe, it */

const assert = require('assert')

describe('GraphqlController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['GraphqlController'])
  })
})
