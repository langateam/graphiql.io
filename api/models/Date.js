'use strict'

const Model = require('trails-model')
const faker = require('faker')
const _ = require('lodash')

/**
 * @module Date
 * @description TODO document Model
 */
module.exports = class DateModel extends Model {

  static config () {
    return {
      type: 'graphql'
    }
  }

  static schema (graphql) {
    return graphql`

      # Date object type
      type Date {
        past: String
        future: String
        between: String
        recent: String
        month: String
        weekday: String
      }

      type DateQuery {
        findOne: Date
        findAll (count: Int!): [Date]
      }
    `
  }

  static resolver (app) {
    return {
      findOne () {
        return new DateModel(app)
      },
      findAll ({ count }) {
        return _.range(0, count).map(i => new DateModel(app))
      }
    }
  }

  get past () {
    return faker.date.past()
  }

  get future () {
    return faker.date.future()
  }

  get between () {
    return faker.date.between()
  }

  get recent () {
    return faker.date.recent()
  }

  get month () {
    return faker.date.month()
  }

  get weekday () {
    return faker.date.weekday()
  }
}
