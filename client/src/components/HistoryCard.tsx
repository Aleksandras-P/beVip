import { useState } from "react"
import type { Booking } from "../types/booking"

type HistoryCardProps = {
    booking: Booking
}

function HistoryCard (props:HistoryCardProps) {

    const [isOpen,setIsOpen] = useState(false) 
    
    const car = props.booking.car

    return (
        <>
        { (
            <div className="historyCard">

                {car && (


                    <div className="historyCard__cardLabel" onClick={() => setIsOpen(true)}>

                        <div className="historyCard__img">
                            <img src={`../../src/assets/cars/id_${car.id}/${car.images.adImg}`} alt="" />
                        </div>

                        <div className="historyCard__carTitle">
                            <h2>{car.about.title}</h2>
                            <p>{car.about.model} - {car.about.modification}</p>
                        </div>

                        <div className="historyCard__orderDate">
                            <h3>Uzzsakymo data: {new Date(props.booking.dateFrom).toLocaleDateString()}</h3>
                        </div>

                        

                    </div>
                    
                )}

                {isOpen && car && (
                    <div className="historyCard__cardContent">

                        <div className="historyCard__textContent">
                            <p>From: {new Date(props.booking.dateFrom).toLocaleDateString()}</p>
                            <p>To: {new Date(props.booking.dateTo).toLocaleDateString()}</p>
                            <p>Total: {props.booking.totalPrice}</p>
                            <p>Status: {props.booking.status}</p>
                        </div>

                        <div className="historyCard__closeBtn" onClick={() => setIsOpen(false)}>
                            X
                        </div>

                    

                    </div>
                )}

            

            

            
          

          
        </div>
        )}
        </>
    )
}

export default HistoryCard