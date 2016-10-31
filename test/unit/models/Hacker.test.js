'use strict'
/* global describe, it */

const assert = require('assert')

describe('Hacker Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Hacker'])
  })
})
