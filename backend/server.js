//import products from './data/products.js'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'


const app = express() //instance of express 
dotenv.config()
connectDB()

app.use('/api/products', productRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 6000
app.listen(PORT,console.log(`Server is running on port ${PORT}`))