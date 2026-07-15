import { useAppData } from "../hooks/useAppData";

const Loader = () => {

    const {data:appData, isLoading} = useAppData()

  return (
    <>
    {!isLoading && appData && (
      <div className="loaderOverlay">
        <div className="loader">
          <div className="loader__stage">
            <div className="loader__ring"/>
            <div className="loader__ring loader__ring--delay"/>
            <span className="loader__crown">{appData.global.logoIcon}</span>
          </div>
        </div>
      </div>
    
    )}
    </>
    
  );
};

export default Loader;