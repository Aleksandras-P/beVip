export interface AboutCar {
    title: string
    model: string
    modification: string
    engine: string
}

export interface CarImage {
    key: string
    img: string
}

export interface CarImages {
    adImg: string
    postImgs: CarImage[]
}

export interface CarPricelist {
    day: number
    week: number
}

export interface CarDiscount {
    active: boolean
    ammount: number
}

export interface CarRent {
    available: boolean
    pricelist: CarPricelist
    discount: CarDiscount
}

export interface Car {
    id:string
    about: AboutCar
    images: CarImages
    rent: CarRent
    onAd:boolean
}

export interface CarsData {
    carList: Car[]
}