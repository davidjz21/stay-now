import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()

dotenv.config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("connected", () => {
    console.log("Conectado a la base de datos")
})

mongoose.connection.on("disconnected", () => {
    console.log("Desconectado de la base de datos")
})

// middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/users", usersRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        succes: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8800, () => {
    connect()
    console.log("Conectado al backend")
})