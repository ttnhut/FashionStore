import AddPost from "../components/AddPost"
import DashboardBase from "../components/DashboardBase"

const AddProduct = ()=>{
    return (
        <DashboardBase>
        <main className="ml-60 pt-16 max-h-screen overflow-auto">
          <AddPost/>
        </main>
        </DashboardBase>
    )
}

export default AddProduct