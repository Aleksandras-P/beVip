import Car from "../models/carsModel.js"

const carsData_get = async (req, res) => {
    const carsData = await Car.findOne()

    res.status(200).json(carsData)
}

const carsAvailability_patch = async (req,res) => {
    const {id, available} = req.body;

    await Car.updateOne(
        {"carList.id": id},
        {
            $set: {
                "carList.$.rent.available": available
            }
        }
    );

    res.status(200).json({
        succes:true
    })
}

export default {
    carsData_get,
    carsAvailability_patch
}