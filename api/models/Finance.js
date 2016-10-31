'use strict'

const Model = require('trails-model')
const faker = require('faker')
const _ = require('lodash')

/**
 * @module Finance
 * @description TODO document Model
 */
module.exports = class Finance extends Model {

  static config () {
    return {
      type: 'graphql'
    }
  }

  static schema (graphql) {
    return graphql`

      # Finance object type
      type Finance {
        account: String
        accountName: String
        mask: String
        amount: Float
        transactionType: String
        currencyCode: String
        currencyName: String
        currencySymbol: String
        bitcoinAddress: String
      }

      type FinanceQuery {
        findOne: Finance
        findAll (count: Int!): [Finance]
      }
    `
  }

  static resolver (app) {
    return {
      findOne () {
        return new Finance(app)
      },
      findAll ({ count }) {
        return _.range(0, count).map(i => new Finance(app))
      }
    }
  }

  get account () {
    return faker.finance.account()
  }

  get accountName () {
    return faker.finance.accountName()
  }

  get mask () {
    return faker.finance.mask()
  }

  get amount () {
    return faker.finance.amount()
  }

  get transactionType () {
    return faker.finance.transactionType()
  }

  get currencyCode () {
    return faker.finance.currencyCode()
  }

  get currencyName () {
    return faker.finance.currencyName()
  }

  get currencySymbol () {
    return faker.finance.currencySymbol()
  }

  get bitcoinAddress () {
    return faker.finance.bitcoinAddress()
  }

}
