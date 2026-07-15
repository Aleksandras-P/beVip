import iconMap from "../utils/iconMap";
import { useAuth } from "../hooks/useAuth";
import { useAuthModalContext } from "../hooks/useAuthModalContext";
import { useTranslationContext } from "../hooks/useTranslationContext";
import { useAppData } from "../hooks/useAppData";
import { useState } from "react";
import type { AuthMode } from "../types/authModal";
import { Link } from "react-router-dom";



function AuthBox () {

const [userMenuOpen, setUserMenuOpen] = useState(false)
    
const { user, logout } = useAuth();
const { openModal } = useAuthModalContext()
const {translationData, lang, loading:translationDataLoading} = useTranslationContext()
const {data:appData, isLoading:appDataLoading} = useAppData()

const IconUser = iconMap[appData?.navBar?.navIcons?.userIcon || ""]
const IconUserLogedIn = iconMap[appData?.navBar?.navIcons?.logedInIcon || ""]

const handleAuthBtn = (key:AuthMode) => {
    setUserMenuOpen(false)
    openModal(key)
}

    return (
        <>
        {
           translationData && appData && (!translationDataLoading && !appDataLoading) && (
            <div className="authBox-wrapper">
            
            <span onClick={() => setUserMenuOpen((prev) => !prev)} className="userIcon">
                {user ? IconUserLogedIn && <IconUserLogedIn /> : IconUser && <IconUser />}
            </span>
            
            { userMenuOpen && (
            
           
                <div className="authBox">
                {
                    user ? (
                        <>
                        <h4>{translationData.global.greeting[lang]}, <span>{user.name}</span></h4>
                        <p>{translationData.global.balance[lang]}: {user.balance}</p>
                        <div className="authBox__links">

                            <Link className="authBox__link" to="/profile" >
                            Mano profilis
                            </Link>

                            <Link className="authBox__link" to="/profile/orders" >
                            Mano uzsakymai
                            </Link>

                            <Link className="authBox__link" to="/profile/history" >
                            Uzsakymu istorija
                            </Link>

                        </div>
                        <button className="primaryBtn-filled" onClick={logout}>{translationData.global.buttons.logoutBtn[lang]}</button>
                        </>
                    ) : (

                        <>
                        <button className="secondaryBtn-filled" onClick={() => handleAuthBtn("login")}>{translationData.global.buttons.loginBtn[lang]}</button>
                        <button className="secondaryBtn" onClick={() => handleAuthBtn("register")}>{translationData.global.buttons.signupBtn[lang]}</button>
                        </>
                    )
                }
            </div>
            
            )
            
            }
            
            </div>
           )
        }
        </>
    )
}

export default AuthBox