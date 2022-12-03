import DashboardBase from "../components/DashboardBase"
import EditCat from "../components/EditCat"

const EditCategory = ()=>{
    return (
        <DashboardBase>
            <main className="ml-60 pt-16 max-h-screen overflow-auto text-center">
                <EditCat/>
            </main>
        </DashboardBase>
    )
}

export default EditCategory