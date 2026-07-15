import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import translationsRoutes from "./routes/translations.js"
import pageDataRoutes from "./routes/pageData.js"
import carsRoutes from "./routes/cars.js"
import authRoutes from "./routes/auth.js"
import bookingsRoutes from "./routes/booking.js"


dotenv.config()


const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(express.json())

app.use(cookieParser())

app.use((req, res, next) => {
    console.log(req.path, req.method)

   next() 
})

app.use("/api/translations/", translationsRoutes)
app.use("/api/pagedata/", pageDataRoutes)
app.use("/api/cars/", carsRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/bookings/", bookingsRoutes)

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Database connected")
    app.listen(process.env.PORT, () => {
console.log(`Listening on port ${process.env.PORT}`)
})

}).catch((error) => {
    console.log(error)
})