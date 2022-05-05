import mongoose from 'mongoose'
mongoose.Promise = require('bluebird')
export const connectDatabase = (): void => {
  const mongodbConnectUrl = process.env.ENV_NAME === 'dev'
    ? 'mongodb://localhost:27017/shopping-online'
    : `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URLDEV || process.env.DB_URL}/${process.env.DB_NAME}`
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
