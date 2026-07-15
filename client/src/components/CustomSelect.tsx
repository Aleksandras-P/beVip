import { useAppData } from "../hooks/useAppData";
import iconMap from "../utils/iconMap";

function CustomSelect({ children, ...selectProps }: React.SelectHTMLAttributes<HTMLSelectElement>) {

    const {data: appData, isLoading: appDataLoading} = useAppData()
    
    const IconSelect = iconMap[appData?.global?.selectIcon || ""]

  return (
    <>
    { appData && !appDataLoading && (
    <div className="selectWrapper">
      <select className="selectWrapper__filterSelect" {...selectProps}>
        {children}
      </select>

      {IconSelect &&<IconSelect className="selectWrapper__arrow" />}
    </div>
    )
    }
    </>
    
  );
}
export default CustomSelect