import * as dotenv from "dotenv";
import express from 'express';
import router from './routes/index'
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const app = express();
dotenv.config();
app.use(express.json())
app.use('/api', router)
const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`server  started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}
start()
