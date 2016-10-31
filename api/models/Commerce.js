'use strict'

const Model = require('trails-model')
const faker = require('faker')
const _ = require('lodash')

/**
 * @module Commerce
 * @description TODO document Model
 */
module.exports = class Commerce extends Model {

  static config () {
    return {
      type: 'graphql'
    }
  }

  static schema (graphql) {
    return graphql`

      # Commerce object type
      type Commerce {
        color: String
        department: String
        productName: String
        price: Int
        productAdjective: String
        productMaterial: String
        product: String
      }

      type CommerceQuery {
        findOne: Commerce
        findAll (count: Int!): [Commerce]
      }
    `
  }

  static resolver (app) {
    return {
      findOne () {
        return new Commerce(app)
      },
      findAll ({ count }) {
        return _.range(0, count).map(i => new Commerce(app))
      }
    }
  }

  get color () {
    return faker.commerce.color()
  }

  get department () {
    return faker.commerce.department()
  }

  get productName () {
    return faker.commerce.productName()
  }

  get price () {
    return faker.commerce.price()
  }

  get productAdjective () {
    return faker.commerce.productAdjective()
  }

  get productMaterial () {
    return faker.commerce.productMaterial()
  }

  get product () {
    return faker.commerce.product()
  }
}
