import { useState } from "react";
import { useCancelBooking } from "../hooks/useBookings";
import type { Booking } from "../types/booking"

type OrderCardProps = {
    booking: Booking
}

function OrderCard (props:OrderCardProps) {

      const { mutate: cancelBooking, isPending: cancelling } = useCancelBooking();

      const [isOpen,setIsOpen] = useState(false) 

      const car = props.booking.car

    return (
        <>
        { (
            <div className="orderCard">

                {car && (


                    <div className="orderCard__cardLabel" onClick={() => setIsOpen(true)}>

                        <div className="orderCard__img">
                            <img src={`../../src/assets/cars/id_${car.id}/${car.images.adImg}`} alt="" />
                        </div>

                        <div className="orderCard__carTitle">
                            <h2>{car.about.title}</h2>
                            <p>{car.about.model} - {car.about.modification}</p>
                        </div>

                        <div className="orderCard__orderDate">
                            <h3>Uzzsakymo data: {new Date(props.booking.dateFrom).toLocaleDateString()}</h3>
                        </div>

                        

                    </div>
                    
                )}

                {isOpen && car && (
                    <div className="orderCard__cardContent"> 

                        <div className="orderCard__closeBtn" onClick={() => setIsOpen(false)}>
                            X
                        </div>

                        <div className="orderCard__textContent">
                            <p>From: {new Date(props.booking.dateFrom).toLocaleDateString()}</p>
                            <p>To: {new Date(props.booking.dateTo).toLocaleDateString()}</p>
                            <p>Total: {props.booking.totalPrice}</p>
                            <p>Status: {props.booking.status}</p>
                        </div>

                        <div className="orderCard__cancelBtn">
                            <button
                            className="secondaryBtn"
                            disabled={cancelling}
                            onClick={() => cancelBooking(props.booking._id)}
                        >
                            Cancel
                            </button>
                        </div>

                    </div>
                )}

            

            

            
          

          
        </div>
        )}
        </>
    )
}

export default OrderCard