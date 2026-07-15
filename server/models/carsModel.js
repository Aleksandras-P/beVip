import mongoose from "mongoose"

const Schema = mongoose.Schema

const aboutCarSchema = new Schema ({
    title: String,
    model: String,
    modification: String,
    engine: String
})

const carImageSchema = new Schema ({
    key: String,
    img: String
})

const carImagesSchema = new Schema ({
    adImg: String,
    postImgs: [carImageSchema]
})

const carPricelistSchema = new Schema ({
    day: Number,
    week: Number
})

const carDiscountSchema = new Schema ({
    active: Boolean,
    ammount: Number
})

const carRentSchema = new Schema ({
    available: Boolean,
    pricelist: carPricelistSchema,
    discount: carDiscountSchema
})

const carSchema = new Schema ({
    id: String,
    about: aboutCarSchema,
    images: carImagesSchema,
    rent: carRentSchema,
    onAd:Boolean

})

const carsDataSchema = new Schema({
  carList: [carSchema]
})



export default mongoose.model("Car", carsDataSchema)
