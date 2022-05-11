import mongoose from 'mongoose'
mongoose.Promise = require('bluebird')

export const connectDatabase = (): void => {
  const mongodbConnectUrl = process.env.NODE_ENV === 'development'
    ? `mongodb://${process.env.DB_URL_DEV}/${process.env.DB_NAME_DEV}`
    : `mongodb://${process.env.DB_URL_PROD}/${process.env.DB_NAME_PROD}?authMechanism=SCRAM-SHA-1`

  const handleConnectOptions = () => {
    let result = {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true
    };
    if (process.env.NODE_ENV === 'development') return result;
    return {
      authSource: process.env.DB_USERNAME,
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
      ...result,
    }
  }

  mongoose.connect(mongodbConnectUrl, handleConnectOptions())
    .then(() => {
      console.log('Database connection created')
    }).catch((err) => {
      console.log(err)
    })
}

