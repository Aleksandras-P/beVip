import AppData from "../models/pageDataModel.js"

const pageData_get = async (req, res) => {
    const pageData = await AppData.findOne()

    res.status(200).json(pageData)
}

export default {
    pageData_get
}