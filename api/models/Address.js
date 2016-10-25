'use strict'

const Model = require('trails-model')
const faker = require('faker')
const _ = require('lodash')

/**
 * @module Address
 * @description TODO document Model
 */
module.exports = class Address extends Model {

  static config () {
    return {
      type: 'graphql'
    }
  }

  static schema (graphql) {
    return graphql`

      # Address type definition
      type Address {
        zipCode: String
        city: String
        county: String
        country: String
        state: String
        latitude: Float
        longitude: Float
      }

      # Allowed Queries and Parameters
      type Query {
        address: Address
        addressList (count: Int): [Address]
      }
    `
  }

  static resolver (app) {
    return {
      address () {
        return new Address(app)
      },
      addressList ({ count }) {
        return _.range(0, count).map(i => new Address(app))
      }
    }
  }

  get zipCode () {
    return faker.address.zipCode()
  }

  get city () {
    return faker.address.city()
  }

  get county () {
    return faker.address.county()
  }

  get country () {
    return faker.address.country()
  }

  get state () {
    return faker.address.state()
  }

  get latitude () {
    return faker.address.latitude()
  }

  get longitude () {
    return faker.address.longitude()
  }
}
