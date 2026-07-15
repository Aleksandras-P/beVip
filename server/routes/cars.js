import express from "express"
import carsController from "../controllers/carsController.js"

const router = express.Router()

router.get("/", carsController.carsData_get)

export default router