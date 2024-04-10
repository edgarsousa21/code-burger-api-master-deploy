import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import Product from '../app/models/Product'
import User from '../app/models/User'
import Category from '../app/models/Category'

// import configDatabase from '../config/database'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:G3c3g3cg*4-Ea-AD-EcE6F-5B4F34D1a@monorail.proxy.rlwy.net:46261/railway',
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:BPKpoWAPmdpYDuMyxCyUPcaTVeYTmpfF@viaduct.proxy.rlwy.net:19918',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
  }
}

export default new Database()

// conta 0: mongodb://mongo:Aa3-c6CHccACHh341HGb55DfehBbbDEC@roundhouse.proxy.rlwy.net:20587
// conta 1: 'mongodb://mongo:bfBEB5ggfA3gbeB1cBEF5HcaDAhAe5HC@monorail.proxy.rlwy.net:40158'

// conta 1.2: 'mongodb://mongo:2a22hdEcf-hfHh1cd6deHe3d5D12heD-@roundhouse.proxy.rlwy.net:27545',
// conta 1.2: 'postgresql://postgres:G3c3g3cg*4-Ea-AD-EcE6F-5B4F34D1a@monorail.proxy.rlwy.net:46261/railway',

// conta atual MongoDB: 'mongodb://mongo:BPKpoWAPmdpYDuMyxCyUPcaTVeYTmpfF@viaduct.proxy.rlwy.net:19918'
