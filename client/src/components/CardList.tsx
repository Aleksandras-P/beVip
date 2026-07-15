import type { Car } from "../types/cars"
import CarCard from "./CarCard"

type CardListProps = {
    title: string
    undertext: string
    carList: Car[]
}

function CardList(props: CardListProps) {
    return (
        <div className="cardList">
            <h1 className="cardList__title">{props.title}</h1>

            <div className="cardList__box">
                {props.carList.map((car: Car) => (
                    <div key={car.id} className="cardList__card">
                    <CarCard car={car} />
                    </div>                
                ))}
            </div>

            <p className="cardList__undertext">{props.undertext}</p>
        </div>
    )
}

export default CardList