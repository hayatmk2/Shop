//import products from './data/products.js'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const app = express() //instance of express 
dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/config/paypal',(req, res) => 
res.send(process.env.PAYPAL_CLIENT_ID))

app.use(errorHandler)

const PORT = process.env.PORT || 6000
app.listen(PORT,console.log(`Server is running on port ${PORT}`))