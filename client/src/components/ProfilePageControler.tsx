import { useState } from "react"
import type { ProfilePageState } from "../types/types"
import ProfileRender from "./ProfileRender"
import MyOrders from "./MyOrders"
import OrdersHistory from "./OrdersHistory"

type ProfilePageControllerProps = {
    state: ProfilePageState 
}

function ProfilePageControler (props:ProfilePageControllerProps) {

    const [controlerState, setControlerState] = useState<ProfilePageState>(props.state)

    return (
        <>
        <div className="profilePageControler">
            <h3></h3>

            <div className="profilePageControler__selector">
                <div className="profilePageControler__option" onClick={() => setControlerState("profile")}>Mano profilis</div>
                <div className="profilePageControler__option" onClick={() => setControlerState("myOrders")}>Mano uzsakymai</div>
                <div className="profilePageControler__option" onClick={() => setControlerState("ordersHistory")}>Uzsakymu istorija</div>
            </div>

            <div className="profilePageControler__container">
                {controlerState === "profile" && <ProfileRender />}
                {controlerState === "myOrders" && <MyOrders />}
                {controlerState === "ordersHistory" && <OrdersHistory />}
            </div>

        </div>
        
        </>
    )

}

export default ProfilePageControler