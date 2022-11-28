import AddCat from "../components/AddCat"
import DashboardBase from "../components/DashboardBase"

const AddCategory = ()=>{
    return (
        <DashboardBase>
            <main className="ml-60 pt-16 max-h-screen overflow-auto">
            <AddCat/>
            </main>
        </DashboardBase>
        
    )
}

export default AddCategory