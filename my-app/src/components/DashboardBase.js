import DashboardAside from "../pages/DashboardAside"
import DashboardHeader from "../pages/DashboardHeader"

const DashboardBase = ({children})=>{
    return (
        <div>
            <DashboardHeader/>
            <DashboardAside/>
            {children}
        </div>
    )
}

export default DashboardBase