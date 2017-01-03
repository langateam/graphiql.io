'use strict'

const Model = require('trails/model')
const faker = require('faker')
const _ = require('lodash')

/**
 * @module Image
 * @description TODO document Model
 */
module.exports = class Image extends Model {

  static config () {
    return {
      type: 'graphql'
    }
  }

  static schema (graphql) {
    return graphql`

      # Image object type
      type Image {
        image: String
        avatar: String
        imageUrl: String
        abstract: String
        animals: String
        business: String
        cats: String
        city: String
        food: String
        nightlife: String
        fashion: String
        people: String
        sports: String
        technics: String
        transport: String
      }

      type ImageQuery {
        findOne: Image
        findAll (count: Int!): [Image]
      }
    `
  }

  static resolver (app) {
    return {
      findOne () {
        return new Image(app)
      },
      findAll ({ count }) {
        return _.range(0, count).map(i => new Image(app))
      }
    }
  }

  get image () {
    return faker.image.image()
  }

  get avatar () {
    return faker.image.avatar()
  }

  get imageUrl () {
    return faker.image.imageUrl()
  }

  get abstract () {
    return faker.image.abstract()
  }

  get animals () {
    return faker.image.animals()
  }

  get business () {
    return faker.image.business()
  }

  get cats () {
    return faker.image.cats()
  }

  get city () {
    return faker.image.city()
  }

  get food () {
    return faker.image.food()
  }

  get nightlife () {
    return faker.image.nightlife()
  }

  get fashion () {
    return faker.image.fashion()
  }

  get people () {
    return faker.image.people()
  }

  get sports () {
    return faker.image.sports()
  }

  get technics () {
    return faker.image.technics()
  }

  get transport () {
    return faker.image.transport()
  }

}
