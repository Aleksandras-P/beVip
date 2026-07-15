import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import { useTranslationContext } from "../hooks/useTranslationContext";
import type { ProfilePageState } from "../types/types";
import ProfilePageControler from "../components/ProfilePageControler";


type ProfilePageProps = {
    pageState: ProfilePageState
}

function Profile(props: ProfilePageProps) {

  const {translationData, loading:translationDataLoading, lang} = useTranslationContext()


  return (

    <>

    {(translationDataLoading) && <Loader />}
    
    { translationData && !translationDataLoading && (

        
    <div className="profilePage">

        <div className="container">
            <PageTitle title={translationData.global.pageTitles.profilePage.title[lang]} keyWord={translationData.global.pageTitles.profilePage.key[lang]} />

            <ProfilePageControler state={props.pageState} />

        </div>

    </div>
    )    
}
    </>

   
  );
}

export default Profile;