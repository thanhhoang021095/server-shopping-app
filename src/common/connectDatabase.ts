import mongoose from 'mongoose'
mongoose.Promise = require('bluebird')
export const connectDatabase = (): void => {
  const mongodbConnectUrl = process.env.ENV_NAME === 'dev'
    ? `mongodb://${process.env.DB_URL_DEV}/${process.env.DB_NAME}`
    : `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL_DEV || process.env.DB_URL_PROD}/${process.env.DB_NAME}`
  mongoose.connect(mongodbConnectUrl
    , {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => {
      console.log('Database connection created')
    }).catch((err) => {
      console.log(err)
    })
}
