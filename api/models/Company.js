'use strict'

const Model = require('trails-model')
const faker = require('faker')

/**
 * @module Company
 * @description TODO document Model
 */
module.exports = class Company extends Model {

  static config () {
    return {
      type: 'graphql'
    }
  }

  static schema (graphql) {
    return graphql`

      # Company type
      type Company {
        companyName: String
        catchPhrase: String
        suffixes: String
        bs: String
      }

      type CompanyQuery {
        findOne: Company
      }
    `
  }

  static resolver (app) {
    return {
      findOne () {
        return new Company(app)
      }
    }
  }

  get companyName () {
    return faker.company.companyName()
  }

  get catchPhrase () {
    return faker.company.catchPhrase()
  }

  get suffixes () {
    return faker.company.suffixes()
  }

  bs () {
    return faker.company.bs()
  }
}
