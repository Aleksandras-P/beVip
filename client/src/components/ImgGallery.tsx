import { useState } from "react"
import type { Car } from "../types/cars"

type ImgGalleryProps = {
    car: Car
}

function ImgGallery (props:ImgGalleryProps) {
    
const [selectedImg, setSelectedImg] = useState<string>(props.car.images.postImgs.find((img) => img.key === "main")?.img || "")

    return (
        <div className="imgGallery">
            <div className="imgGallery__imgDisplay">
                <img className="imgGallery__selectedImg" src={`../../src/assets/cars/id_${props.car.id}/${selectedImg}`} alt="asdasdfas" />
            </div>
            <div className="imgGallery__img-selector">
                {props.car.images.postImgs.map((img) => (
                <div onClick={() => setSelectedImg(img.img)} className={`imgGallery__img-card ${img.img === selectedImg? "selected" : ""}`}>
                    <img className="imgGallery__img" src={`../../src/assets/cars/id_${props.car.id}/${img.img}`} alt={img.key} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default ImgGallery