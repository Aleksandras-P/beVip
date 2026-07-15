import { Link } from "react-router-dom"
import { useAppData } from "../hooks/useAppData"

function Logo () {

    const {data:appData, isLoading} = useAppData()

    const [firstWord, secondWord] = appData?.global?.projectName.split(' ') || "";

    return (
        
        <>
        {!isLoading && appData && (
            <Link to="/" >
                <div className="logo">
                    <span className="logo__crown">{appData.global.logoIcon}</span>
                    <h1 className="logo__text">
                        <span className="logo__word logo__word--first">{firstWord}</span>
                        <span className="logo__word logo__word--second">{secondWord}</span>
                    </h1>
                </div>
                
            </Link>
        )}
        </>
    )
}

export default Logo