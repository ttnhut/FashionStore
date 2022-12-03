import DashboardBase from "../components/DashboardBase"
import UserManagerComponent from "../components/UserManagerComponent"

const UserManager = ()=>{
    return (
        <DashboardBase>
        <main className="ml-60 pt-16 max-h-screen overflow-auto text-center">
          <UserManagerComponent />
        </main>
    </DashboardBase>
    )
}

export default UserManager