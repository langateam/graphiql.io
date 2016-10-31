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

  bs () {
    return faker.company.bs()
  }
}
