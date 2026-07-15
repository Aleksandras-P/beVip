import { useAuth } from "../hooks/useAuth";
import { useMyBookings } from "../hooks/useBookings";
import { useTranslationContext } from "../hooks/useTranslationContext"


function ProfileRender () {

    const { user, logout } = useAuth();
    const { data: bookings = [], isLoading:bookingsLoading } = useMyBookings();

    const {translationData, lang, loading:translationDataLoading} = useTranslationContext()

    return (
        <>
        {translationData && !bookingsLoading && !translationDataLoading && user && (
            <div className="profileRender">
                <div className="profileRender__content">
                    <h3 className="profileRender__text">Name<span className="profileRender__span">{user.name}</span></h3>
                    <h4 className="profileRender__text">Email<span className="profileRender__span">{user.email}</span></h4>
                    <h4 className="profileRender__text">Balance <span className="profileRender__span">{user.balance}</span></h4>
                    <h4 className="profileRender__text">Total orders completed <span className="profileRender__span">{bookings.filter((booking) => booking.status === "completed").length}</span></h4>
                </div>

                <div className="profileRender__logoutBtn">
                    <button className="secondaryBtn" onClick={logout}>{translationData.global.buttons.logoutBtn[lang]}</button>
                </div>
                
            </div>
        )}
        </>
    )
}
export default ProfileRender