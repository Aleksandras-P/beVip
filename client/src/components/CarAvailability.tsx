
type CarAvailabilityProps = {
    available: boolean
    text: string
    className: string
}

function CarAvailability (props:CarAvailabilityProps) {


    return (
        <div className={`${props.className} carAvailability-container`}>
            <div className={`lamp ${props.available ? "available" : "unavailable"}`}></div>
            <p>{props.text}</p>
        </div>
    )
}

export default CarAvailability
