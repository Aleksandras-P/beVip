import express from "express"
import pageDataController from "../controllers/pageDataController.js"

const router = express.Router()

router.get("/", pageDataController.pageData_get)

export default router