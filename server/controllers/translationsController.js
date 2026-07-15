import Translation from "../models/translationsModel.js"

const translations_get = async (req, res) => {
    const translations = await Translation.findOne()

    res.status(200).json(translations)
}

export default {
    translations_get
}