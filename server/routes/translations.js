import express from "express"
import translationsController from "../controllers/translationsController.js"

const router = express.Router()

router.get("/", translationsController.translations_get)

export default router