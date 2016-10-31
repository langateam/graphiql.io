'use strict'

const Model = require('trails-model')
const faker = require('faker')
const _ = require('lodash')

/**
 * @module Hacker
 * @description TODO document Model
 */
module.exports = class Hacker extends Model {

  static config () {
    return {
      type: 'graphql'
    }
  }

  static schema (graphql) {
    return graphql`

      # Hacker object type
      type Hacker {
        abbreviation: String
        adjective: String
        noun: String
        verb: String
        ingverb: String
        phrase: String
      }

      type HackerQuery {
        findOne: Hacker
        findAll (count: Int!): [Hacker]
      }
    `
  }

  static resolver (app) {
    return {
      findOne () {
        return new Hacker(app)
      },
      findAll ({ count }) {
        return _.range(0, count).map(i => new Hacker(app))
      }
    }
  }

  get abbreviation () {
    return faker.hacker.abbreviation()
  }

  get adjective () {
    return faker.hacker.adjective()
  }

  get noun () {
    return faker.hacker.noun()
  }

  get verb () {
    return faker.hacker.verb()
  }

  get ingverb () {
    return faker.hacker.ingverb()
  }

  get phrase () {
    return faker.hacker.phrase()
  }
}
